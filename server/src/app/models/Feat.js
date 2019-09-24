import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: Array,
    required: true,
  },
  benefits: {
    type: String,
  },
});

export default mongoose.model('Feat', schema);
