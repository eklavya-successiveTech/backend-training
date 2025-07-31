import { TodoModel } from './models/Todo.model';
import { faker } from '@faker-js/faker';

const userId = '688b02fd8e059ff5083c3001'; 

export async function seedTodosIfNeeded(): Promise<void> {
  const count = await TodoModel.countDocuments();

  if (count >= 50) {
    console.log(`Skipping seed: ${count} todos already exist.`);
    return;
  }

  const todos = Array.from({ length: 50 - count }).map(() => ({
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    completed: faker.datatype.boolean(),
    user: userId,
  }));

  await TodoModel.insertMany(todos);
  console.log(`Seeded ${todos.length} todos.`);
}
