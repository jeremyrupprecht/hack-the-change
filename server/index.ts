import express, { Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app: Application = express();
const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000;
// testing route
app.get("/", (_req, res: Response) => {
  res.send(`Server is running on port: ${port}`);
});

// get users
app.get('/api/users', async (req: Request, res: Response) => {
  try {
      const allUsers = await prisma.user.findMany();
      return res.json({
          success: true,
          data: allUsers
      });
  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
});

// add users
app.post('/api/users', async (req: Request, res: Response) => {
  try {
      const { name, email, password } = req.body;
      const newUser = await prisma.user.create({
          data: {
              name,
              email,
              password
          }
      });
      return res.json({
          success: true,
          data: newUser
      });
  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})