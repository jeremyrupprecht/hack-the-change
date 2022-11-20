// model Student {
//     id        String   @id @default(uuid())
//     course    Course   @relation(fields: [courseId], references: [id])
//     courseId  String
//     user      User     @relation(fields: [userId], references: [id])
//     userId    String
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }

import { PrismaClient } from '@prisma/client'
import { Response, Request } from "express"

const express = require('express')
const studentRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
studentRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('Student Route hit at: ', Date.now())
  next()
})

// create a new student
studentRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { courseId, userId } = req.body;
    const newStudent = await prisma.student.create({
        data: {         
            userId,
            courseId,
        }
    });
    return res.json({
        success: true,
        data: newStudent
    });
} catch (error) {
    return res.json({
        success: false,
        message: error
    });
}
})

module.exports = studentRouter
