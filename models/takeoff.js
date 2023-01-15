import mongoose from 'mongoose'
// import lock to grab lock finishes to import into enum of lock finishes
// import builders to grab list of builders to enum into builder

const Schema = mongoose.Schema

// ADD ADDRESS REGEX TO VALIDATE ADDRESS INPUT
// WRITE REGEX TO VALIDATE KEYNUMBER IS XXXXX OF NUMBERS
// WRITE REGEX TO VALIDATE LOCKBOX CODE IS A STRING OF NUMBERS

const takeoffSchema = new Schema({
  createdBy: {type: Schema.Types.ObjectId, ref: 'Profile'},
  address: {type: String, required: true,},
  builder: {type: Schema.Types.ObjectId, ref: 'Builder'},
  lockboxCode: {type: String,},
  lock: {type: Schema.Types.ObjectId, ref: 'Lock'},
  lockFinish: {type: String, required: true,},
  lockCount: {type: [{type: Number, required: true, min: 0}], required: true, length: 13},
  keyNumber: {type: String, length: 5,},
  // notes: {type: [Schema.Types.ObjectId, ref:'Note']},
  jobStatus: {type: Number, required: true, default: 0, enum: [0, 1, 2]},
  deadline: {type: Date, min: new Date()}
}, {
  timestamps: true,
})

const Takeoff = mongoose.model('Takeoff', takeoffSchema)

export {
  Takeoff
}