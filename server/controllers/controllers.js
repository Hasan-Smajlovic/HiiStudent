const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Announcement = require("../models/announcement");
const Employer = require("../models/employer");
const Student = require("../models/student");
const Application = require("../models/application");

exports.signupUser = async (req, res) => {
  try {
    const { email, password, passwordConfirmation, userType } = req.body;
    if (!email || !password || !passwordConfirmation || !userType) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password !== passwordConfirmation) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email: email,
      password: hashedPassword,
      role: userType,
    });

    return res
      .status(201)
      .json({ message: "User created successfully. Please log in.", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred.", error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (!email || !password) {
      return res.status(400).json({ message: "Missing user or password!" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true, // Prevents XSS attacks
      secure: process.env.NODE_ENV === "production", // Set to true in production (HTTPS)
      sameSite: "strict", // Prevent CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    });

    res.status(200).json({
      message: "Logged in successfully",
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred during logout.", error });
  }
};

exports.authCheck = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    res.json({ user: decoded });
    next();
  });
};

exports.getInternshipsBih = async (req, res) => {
  try {
    const announcements = await Announcement.findAll({
      where: { location: "bih", type: "internship" },
    });
    if (!announcements) {
      return res
        .status(204)
        .json({ message: "No available internships in BiH" });
    }
    return res.status(200).json(announcements);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while sending internhips in BiH",
      error,
    });
  }
};

exports.getInternshipsEurope = async (req, res) => {
  try {
    const announcements = await Announcement.findAll({
      where: { location: "europe", type: "internship" },
    });
    if (!announcements) {
      return res
        .status(204)
        .json({ message: "No available internships in Europe" });
    }
    return res.status(200).json({
      message: "Internships in Europe sent succesfully",
      announcements,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while sending internhips in Europe",
      error,
    });
  }
};

exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findAll();
    if (!announcements) {
      return res.status(204).json({ message: "No announcements found" });
    }
    return res.status(200).json(
      announcements,
    );
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while sending announcements", error });
  }
}

exports.getJobsBih = async (req, res) => {
  try {
    const announcements = await Announcement.findAll({
      where: { location: "bih", type: "job" },
    });
    if (!announcements) {
      return res.status(204).json({ message: "No available jobs in BiH" });
    }
    return res
      .status(200)
      .json({ message: "Jobs in BiH sent succesfully", announcements });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while sending jobs in BiH", error });
  }
};

exports.getJobsEurope = async (req, res) => {
  try {
    const announcements = await Announcement.findAll({
      where: { location: "europe", type: "job" },
    });
    if (!announcements) {
      return res.status(204).json({ message: "No available jobs in Europe" });
    }
    return res
      .status(200)
      .json({ message: "Jobs in Europe sent succesfully", announcements });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while sending jobs in Europe",
      error,
    });
  }
};
