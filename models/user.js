import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  googleId: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  role: {type: Number, required: true, default: 0},
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export {
  User
}
