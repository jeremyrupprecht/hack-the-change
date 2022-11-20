import express, { Application, Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client'
const jwt = require("jsonwebtoken");
const app: Application = express();
const JWT_SECRET = 'secret';
const prisma = new PrismaClient();

export function authenticateToken(req: Request & {user: User}, res: Response, next: () => void) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000;

// testing route
app.get("/", (_req, res: Response) => {
  res.send(`Server is running on port: ${port}`);
});

// Auth Routes
const auth = require('./routes/auth');
app.use('/api/auth', auth)

// User Routes
const users = require('./routes/user');
app.use('/api/user', users)

// Course Routes
const courses = require('./routes/course');
app.use('/api/course', courses)

// Response Routes
const responses = require('./routes/response');
app.use('/api/response', responses);

// Student Routes
const students = require('./routes/student');
app.use('/api/student', students);

// Poll Routes
const polls = require('./routes/poll');
app.use('/api/polls', polls);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})