const mongoose = require("mongoose");

const studentHeadIdSchema=new mongoose.Schema({
  student_head_id:{type:String}
})
const EventIdSchema=new mongoose.Schema({
  event_id:{type:String}
})
const facultySchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  department: String,
  student_heads: [studentHeadIdSchema],
  events: [EventIdSchema]
});

const Faculty = mongoose.model("Faculty", facultySchema);


const studentHeadSchema = new mongoose.Schema({
  headEmail:String,
  name: String,
  email: { type: String, unique: true },
  password: String,
  department: String,
  events: [EventIdSchema]
});
const StudentHead = mongoose.model("StudentHead", studentHeadSchema);

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  department: String,

});
const Volunteer = mongoose.model("Volunteer", volunteerSchema);

const participantSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  department: String,
});
const Participant = mongoose.model("Participant", participantSchema);

const EventSchema = new mongoose.Schema({
  name:String,
  venue:String,
  date:Date,
  student_head:String,
  time:String
})

const Event = mongoose.model("Event", EventSchema);
module.exports = {
  Faculty,
  StudentHead,
  Volunteer,
  Participant,
  Event
};
