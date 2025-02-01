const express = require('express');
const router = express.Router();
const path = require('path');
const JobApplication = require('../models/JobApplication');
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Submit job application
router.post('/', async (req, res) => {
  try {
    const upload = req.app.locals.upload;

    upload.single('resume')(req, res, async (err) => {
      try {
        if (err) {
          console.error('Upload error:', err);
          return res.status(400).json({
            success: false,
            message: err.message || 'Error uploading file'
          });
        }

        if (!req.file) {
          return res.status(400).json({
            success: false,
            message: 'Resume file is required'
          });
        }

        const {
          name,
          email,
          phone,
          position,
          experience,
          qualification,
          coverLetter
        } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !position) {
          return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields'
          });
        }

        // Create new job application
        const jobApplication = new JobApplication({
          name,
          email,
          phone,
          position,
          experience,
          qualification,
          coverLetter,
          resumePath: req.file.path
        });

        // Save to database
        await jobApplication.save();

        // Send email notification using SendGrid
        try {
          const msg = {
            to: process.env.ADMIN_EMAIL,
            from: {
              email: process.env.SENDGRID_FROM_EMAIL,
              name: 'DW Innovation Job Portal'
            },
            subject: `New Job Application - ${position} from ${name}`,
            html: `
              <h2>New Job Application Received</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Position:</strong> ${position}</p>
              <p><strong>Experience:</strong> ${experience || 'Not specified'}</p>
              <p><strong>Qualification:</strong> ${qualification || 'Not specified'}</p>
              <p><strong>Cover Letter:</strong></p>
              <p>${coverLetter || 'Not provided'}</p>
            `,
            attachments: [
              {
                content: require('fs').readFileSync(req.file.path).toString('base64'),
                filename: req.file.originalname,
                type: req.file.mimetype,
                disposition: 'attachment'
              }
            ]
          };

          await sgMail.send(msg);
          console.log('Email sent successfully');

          res.status(201).json({
            success: true,
            message: 'Application submitted successfully',
            application: jobApplication
          });
        } catch (emailError) {
          console.error('Email error:', emailError);
          
          // Even if email fails, we'll return success since we saved to database
          res.status(201).json({
            success: true,
            message: 'Application submitted successfully, but there was an issue sending the email notification.',
            application: jobApplication
          });
        }
      } catch (innerError) {
        console.error('Inner error:', innerError);
        res.status(500).json({
          success: false,
          message: innerError.message || 'Error processing application'
        });
      }
    });
  } catch (error) {
    console.error('Outer error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error submitting application'
    });
  }
});

module.exports = router;
