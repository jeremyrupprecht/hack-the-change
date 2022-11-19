import express, { Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app: Application = express();
const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000;
// User Routes
const users = require('./routes/users');
app.use('/api/users', users)

// Course Routes
const courses = require('./routes/courses');
app.use('/api/courses', courses)
// testing route
app.get("/", (_req, res: Response) => {
  res.send(`Server is running on port: ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})