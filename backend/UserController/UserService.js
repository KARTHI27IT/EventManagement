const jwt = require("jsonwebtoken");
const { Faculty, StudentHead, Volunteer,Participant,Event } = require("./userModel");
const JWT_SECRET = process.env.JWT_SECRET || "1234";

module.exports.userCreateService = async (UserDetails) => {
  try {
    const { name, email, password, role, department, headEmail } = UserDetails;
    
    if (role !== "faculty" && !headEmail) {
      return { success: false, message: "Head email is required" };
    }
    
    if (!name || !email || !password || !role || !department) {
      return { success: false, message: "All fields are required" };
    }

    let Model;
    if (role === "faculty") Model = Faculty;
    else if (role === "student-head") Model = StudentHead;
    else if (role === "volunteer") Model = Volunteer;
    else if (role === "participant") Model = Participant;
    else return { success: false, message: "Invalid role specified" };

    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return { success: false, message: "Email already in use" };
    }

    let newUser;
    if (role !== "faculty") {
      const faculty = await Faculty.findOne({ email: headEmail });
      if (!faculty) {
        return { success: false, message: "Head not found" };
      }
      
      if (role === "student-head") {
        faculty.student_heads.push({ student_head_id: email });
        await faculty.save();
      }
      newUser = new Model({ name, email, password, department, headEmail });
    } else {
      newUser = new Model({ name, email, password, department });
    }

    await newUser.save();
    return { success: true, message: `${role} registered successfully` };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server Error" };
  }
};


module.exports.createEventService = async (eventDetails) => {
  try {
    const { name, venue, student_head, time, faculty,date } = eventDetails;

    // Validate required fields
    if (!name || !venue || !student_head || !time || !faculty) {
      return { success: false, message: "All fields are required" };
    }

    const Faculty1 = await Faculty.findOne({ email: faculty }); 
    if (!Faculty1) {
      return { success: false, message: "Faculty not found" };
    }

    const Student1 = await StudentHead.findOne({ email: student_head });
    if (!Student1) {
      return { success: false, message: "Student head not found" };
    }

    const newEvent = new Event({ name, venue, student_head, time, faculty,date });
    await newEvent.save();

    
    Faculty1.events.push({ event_id: newEvent._id });
    Student1.events.push({ event_id: newEvent._id });

    
    await Faculty1.save();
    await Student1.save();

    return { success: true, message: "Event created successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server Error" };
  }
};





// Login Service
module.exports.userLoginService = async (UserDetails) => {
  try {
    
    const { email, password, role} = UserDetails;

    let Model;
    if (role === "faculty") Model = Faculty;
    else if (role === "student-head") Model = StudentHead;
    else if (role === "volunteer") Model = Volunteer;
    else if (role === "participant")Model = Participant;
    else return { success: false, message: "Invalid role specified" };

    const user = await Model.findOne({ email, password });

    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "24h",
    });

    return {
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email, role: user.role },
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server Error" };
  }
};
module.exports.getEventService = async (userDetails) => {
  try {
    const { email, role } = userDetails;

    let Model;
    if (role === "faculty") Model = Faculty;
    else if (role === "student-head") Model = StudentHead;
    else if (role === "volunteer") Model = Volunteer;
    else if (role === "participant") Model = Participant;
    else return { success: false, message: "Invalid role specified" };

    // Fetch user based on role
    const user = await Model.findOne({ email });
    if (!user) return { success: false, message: "User not found" };

    // Extract event IDs from the user object
    const eventIds = user.events.map(event => event.event_id);

    // Fetch events using the extracted event IDs
    const events = await Event.find({ _id: { $in: eventIds } });

    return {
      success: true,
      message: "Events retrieved successfully",
      events: events || [],
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server Error" };
  }
};
