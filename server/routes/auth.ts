import { PrismaClient } from '@prisma/client'
import { Response, Request } from "express"
const jwt = require("jsonwebtoken");

const JWT_SECRET = 'secret';
const express = require('express')
const authRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
authRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('Auth Route Hit: ', Date.now())
  next()
})

authRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({where: { email: email }})

  if (user?.password === password) {
    return res.json({
      token: jwt.sign({ user: "admin" }, JWT_SECRET),
    });
  }

  return res
    .status(401)
    .json({ message: "The username and password your provided are invalid" });
});



module.exports = authRouter