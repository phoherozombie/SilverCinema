const { User } = require('../models'); // Import User model
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import JWT for token creation

// User Login Controller
exports.loginUser = async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch for email:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Log user information for debugging
    console.log("User found:", {
      id: user.id,
      email: user.email,
      role: user.type_account,
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.type_account }, // Include user ID and role in token payload
      process.env.JWT_SECRET, // Use secret key from environment variables
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Log generated token for debugging
    console.log("Generated JWT Token:", token);

    // Return token and user info
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.type_account, // Include role/type_account in response
      },
    });
  } catch (error) {
    console.error("Server error during login:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Middleware to verify JWT token and role
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded token to request object
    next(); // Proceed to the next middleware
  } catch (err) {
    console.error("Invalid token:", err.message);
    return res.status(401).json({ message: "Invalid token." });
  }
};

// Example of a protected route using verifyToken
exports.adminRoute = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  res.status(200).json({ message: "Welcome to the admin route!" });
};


// User Register Controller
exports.registerUser = async (req, res) => {
  const { firstName: first_name, lastName: last_name, email, password, phoneNumber: phone_number } = req.body;

  try {
    // Validate input fields
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone_number,
      account_balance: 0, // Set default account balance to 0
      type_account: 'customer', // Set default type account to 'customer'
    });

    // Log user details for debugging
    console.log("User created:", {
      id: newUser.id,
      email: newUser.email,
      role: newUser.type_account,
    });

    // Generate JWT token for the newly registered user
    const token = jwt.sign(
      { id: newUser.id, role: newUser.type_account },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return success response with token and user info
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser.id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        role: newUser.type_account,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};