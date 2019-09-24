import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre('save', async function() {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});

schema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', schema);
