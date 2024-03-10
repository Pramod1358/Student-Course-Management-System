const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    dateofbirth: {
      type: String,
      required: true
    },
    branch: {
      type : String,
      required : true,
      enu :['CSE','MECH','CSIT','AIDS','ECE']
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const student = mongoose.model('student',studentschema);  // collection name , schema 

module.exports = student;