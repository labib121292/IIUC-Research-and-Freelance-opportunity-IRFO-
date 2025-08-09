// backend/index.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'irfo_project' // ✅ Must match your phpMyAdmin DB name
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});

// Sample API route
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.get("/api/tasks", (req, res) => {
  db.query("SELECT * FROM freelance_tasks ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// POST new task
app.post("/api/tasks", (req, res) => {
  const { title, category, budget, level, deadline, description } = req.body;
  const sql = `INSERT INTO freelance_tasks (title, category, budget, level, deadline, description) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [title, category, budget, level, deadline, description], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, ...req.body });
  });
});

// DELETE a task (optional)
app.delete("/api/tasks/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM freelance_tasks WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(200);
  });
});
// USER SIGNUP
app.post("/api/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if user already exists
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password and insert
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashedPassword, role], (err, result) => {
      if (err) return res.status(500).json({ error: err });

      res.status(201).json({ message: "Signup successful" });
    });
  });
});

// USER LOGIN
app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result[0];

    if (user.role !== role) {
      return res.status(403).json({ message: "Role mismatch" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      name: user.name,
      role: user.role
    });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
