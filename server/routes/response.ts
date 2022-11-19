import { PrismaClient } from '@prisma/client'
import { Response, Request } from "express"

const express = require('express')
const responseRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
responseRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('Course Route hit at: ', Date.now())
  next()
})

module.exports = responseRouter