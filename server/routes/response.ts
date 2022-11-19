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


// From FastAPI Microservice
responseRouter.post('/', async (req: Request, res: Response) => {
  try {
      const { pollId, userId, responseString, description } = req.body;
      // description must be parsed
      const { feeling, sentiment, method, reason } = description;
      // model PollResponse {
      //   id        String   @id @default(uuid())
      //   response  String
      //   feeling   String
      //   sentiment String
      //   method    String
      //   reason    String
      //   poll      Poll     @relation(fields: [pollId], references: [id])
      //   pollId    String
      //   user      User     @relation(fields: [userId], references: [id])
      //   userId    String
      //   createdAt DateTime @default(now())
      //   updatedAt DateTime @updatedAt
      // }
      
      const newResponse = await prisma.response.create({
          data: {
              response: responseString,
              pollId,
              userId,
              feeling,
              sentiment,
              method,
              reason,
          }
      });

      console.log(`New Response: `, newResponse);


      return res.json({
          success: true,
          data: newResponse
      });

  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
});

module.exports = responseRouter