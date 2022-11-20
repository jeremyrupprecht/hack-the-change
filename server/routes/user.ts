import { Response, Request } from "express"
import { PrismaClient } from '@prisma/client'
import { authenticateToken } from ".."

const express = require('express')
const userRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
userRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('User Route Hit: ', Date.now())
  next()
})

// get users
userRouter.get('/', async (req: Request, res: Response) => {
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
userRouter.post('/', async (req: Request, res: Response) => {
  try {
      const { name, email, password, role } = req.body;
      const newUser = await prisma.user.create({
          data: {
              name,
              email,
              password,
              role
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

module.exports = userRouter
