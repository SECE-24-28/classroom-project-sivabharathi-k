const mongoose = require("mongoose");
const Counter = require('./counter');

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }
}, {
  timestamps: true
});

studentSchema.pre('save', async function(next) {
  if (!this.id) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'studentId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
  }
  next();
});

module.exports = mongoose.model("Student", studentSchema);