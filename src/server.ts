import app from './app';
import { connectToMongo } from './config/mongoose'

const PORT = 3001;

connectToMongo().then(() => {
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
});