import { PrismaClient } from '@prisma/client'
import { Response, Request } from "express"

const express = require('express')
const pollRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
pollRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('Poll Route hit at: ', Date.now())
  next()
})

// create a new course
pollRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { question, courseId } = req.body;
    const newPoll = await prisma.poll.create({
        data: {         
            question,
            courseId,
        }
    });
    return res.json({
        success: true,
        data: newPoll
    });
} catch (error) {
    return res.json({
        success: false,
        message: error
    });
}
})

// get all polls for a given course
pollRouter.get('/:courseId', async (req: Request, res: Response) => {
    try {
      const {courseId} = req.params;
      const newPoll = await prisma.poll.findMany({
          where: {         
              courseId,
          }
      });
      return res.json({
          success: true,
          data: newPoll
      });
  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
  })

  
  // get all responses for a given poll
  pollRouter.get('/:pollId/responses', async (req: Request, res: Response) => {
      try {
          const {pollId} = req.params;
          const pollResponses = await prisma.pollResponse.findMany({
              where: {         
                  pollId,
                }
            });
            return res.json({
                success: true,
                data: pollResponses
            });
        } catch (error) {
            return res.json({
                success: false,
                message: error
            });
        }
    })
    
    module.exports = pollRouter