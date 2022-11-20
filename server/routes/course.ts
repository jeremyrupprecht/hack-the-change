import { PrismaClient } from '@prisma/client'
import { Response, Request } from "express"

const express = require('express')
const courseRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
courseRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('Course Route hit at: ', Date.now())
  next()
})

// create a new course
courseRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name, code, userId, description } = req.body;
    const newUser = await prisma.course.create({
        data: {
            name,
            code,
            userId,
            description
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
})
// get all courses for a given teacher
courseRouter.get('/:teacherId', async (req: Request<{ teacherId: string}>, res: Response) => {
  if (!req.params) return;
  const allUsers = await prisma.course.findMany({
    where: {
      userId: req.params.teacherId
    }
  });
  return res.json({
      success: true,
      data: allUsers  
  });
})
// get all polls for a given course
courseRouter.get('/:courseId/polls', (req: Request, res: Response) => {
  res.send('LIST OF ALL POLLS FOR A GIVEN COURSE ID')
})

module.exports = courseRouter