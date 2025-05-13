import mongoose from 'mongoose';

const ownerFeedbackSchema = new mongoose.Schema({
  feedback: {type: String,required: true},
  ownerEmail: {type: String,required: true},
  createdAt: {type: Date,default: Date.now,},
});

const ownerFeedback = mongoose.model('ownerFeedback', ownerFeedbackSchema);

export default ownerFeedback;
