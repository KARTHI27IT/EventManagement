const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { userCreateService, userLoginService,createEventService,getEventService } = require("./UserController/UserService");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/signupDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB Connection Error:", err));

app.post("/signup", async (req, res) => {
  const result = await userCreateService(req.body);
  res.status(result.success ? 201 : 400).json({ message: result.message });
});

app.post("/login", async (req, res) => {
    const result = await userLoginService(req.body);
    res.status(result.success ? 200 : 400).json({ message: result.message,token:result.token, user: result.user });
});

app.post("/createEvent", async (req, res) => {
  const result = await createEventService(req.body);
  res.status(result.success ? 200 : 400).json({ message: result.message});
});

app.post("/getEvents", async (req, res) => {
  const result = await getEventService(req.body);
  res.status(result.success ? 200 : 400).json({ message: result.message,events:result.events});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
