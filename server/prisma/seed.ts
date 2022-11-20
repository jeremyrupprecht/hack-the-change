import { seedUsers } from "./seed/seed-db";

async function seed(): Promise<void> {
  await seedUsers()
}

seed().catch(err => {console.log(err)})