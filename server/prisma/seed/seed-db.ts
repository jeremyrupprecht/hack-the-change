import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function seedUsers(): Promise<void> {
  const teacher = await prisma.user.create({data: 
    {
      email: 'newteacher6@gmail.com',
      name: 'Greg',
      password: 'password',
      role: 'TEACHER'
    }
  });

  const student1 = await prisma.user.create({data: 
    {
      email: 'student6@gmail.com',
      name: 'Richard',
      password: 'password',
      role: 'STUDENT'
    }
  });

  const student2 = await prisma.user.create({data: 
    {
      email: 'student7@gmail.com',
      name: 'Billy',
      password: 'password',
      role: 'STUDENT'
    }
  });

  const newCourse = await prisma.course.create({
    data: {
        name: 'ECON',
        code: 'ECON1017',
        userId: teacher.id,
        description: 'Intro to Economics'
    }
  });

  const newCourse2 = await prisma.course.create({
    data: {
        name: 'COMPSCI',
        code: 'COMPSCI1017',
        userId: teacher.id,
        description: 'Intro to Computer Science'
    }
  });

  const newPoll1 = await prisma.poll.create({
      data: {         
          question: 'What is the best programming language?',
          courseId: newCourse2.id,
      }
  });

  const newPoll2 = await prisma.poll.create({
    data: {         
        question: 'What is the worst programming language?',
        courseId: newCourse2.id,
    }
  });

  const newPoll3 = await prisma.poll.create({
    data: {         
        question: 'What is the best socio-economic system?',
        courseId: newCourse.id,
    }
  });

const newPoll4 = await prisma.poll.create({
    data: {         
        question: 'What is the best econ system?',
        courseId: newCourse.id,
    }
  });

  // await prisma.users.upsert({
  //   where: { email: 'vlad@polyfill.cc' },
  //   update: {
  //     first_name: 'Vlad',
  //     last_name: 'Vekslyer',
  //     password: PASSWORD,
  //     role: 'USER'
  //   },
  //   create: {
  //     email: 'vlad@polyfill.cc',
  //     first_name: 'Vlad',
  //     last_name: 'Vekslyer',
  //     password: PASSWORD,
  //     role: 'USER'
  //   }
  // });
}
