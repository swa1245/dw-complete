const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const JobApplication = require('../models/JobApplication');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all job applications (protected route)
router.get('/applications', auth, async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

// Get single application with resume (protected route)
router.get('/applications/:id', auth, async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Check if resume exists
    if (application.resumePath && fs.existsSync(application.resumePath)) {
      const resumeBuffer = fs.readFileSync(application.resumePath);
      const resumeBase64 = resumeBuffer.toString('base64');
      application._doc.resumeData = resumeBase64;
    }

    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching application' });
  }
});

// Download resume (protected route)
router.get('/applications/:id/resume', auth, async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application || !application.resumePath) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    if (!fs.existsSync(application.resumePath)) {
      return res.status(404).json({ message: 'Resume file not found' });
    }

    res.download(application.resumePath);
  } catch (error) {
    res.status(500).json({ message: 'Error downloading resume' });
  }
});

// Update application status (protected route)
router.patch('/applications/:id', auth, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application' });
  }
});

module.exports = router;
