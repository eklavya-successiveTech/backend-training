import jwt from 'jsonwebtoken';

const token = jwt.sign(
  { username: 'adminUser', role: 'Admin' }, 
  'my_dummy_secret_key',
  { expiresIn: '1h' }
);

console.log(token);

// Generate User Token- npx ts-node src/modules/Assignment3/generateAdminToken.ts