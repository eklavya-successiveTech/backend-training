import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../../../models/User.model';

const SECRET = 'my_dummy_secret_key';

interface Register {
  username: string;
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

export class AuthService {
  static async register({ username, email, password }: Register) {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      role: 'user', 
    });

    return {
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    };
  }

  static async login({ email, password }:Login) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role, username: user.username },
      SECRET,
      { expiresIn: '1h' }
    );

    return {
      message: 'Login successful',
      token,
    };
  }
}
