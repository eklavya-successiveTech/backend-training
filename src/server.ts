import app from './app';
import { connectToMongo } from './config/mongoose';
import { seedCountries } from './modules/Assignment8/countries.seed';

const PORT = 3001;

connectToMongo()
  .then(async () => {
    console.log('✅ MongoDB connected');

    try {
      const result = await seedCountries();
      console.log('Seeding:', result.message);
    } catch (err) {
      console.error('Seeding error:', (err as Error).message);
    }

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' Failed to connect to MongoDB:', err);
  });
