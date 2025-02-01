require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const adminData = {
      email: 'Dwinnovationpvtltd@gmail.com',
      password: 'admin123', // Change this to a secure password
      name: 'Admin'
    };

    const existingAdmin = await Admin.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log('Admin account already exists');
      process.exit(0);
    }

    const admin = new Admin(adminData);
    await admin.save();
    
    console.log('Admin account created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();
