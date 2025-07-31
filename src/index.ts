import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectDB } from './config/db';
import { seedTodosIfNeeded } from './modules/todos/seedTodos';


const PORT = process.env.PORT;

connectDB();

seedTodosIfNeeded();

app.listen(PORT,()=>{
    console.log("Server is running");
})