import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../../../models/User.model';
import { LoginRequestBody } from '../../../interfaces/auth.interface';

export class AuthService {
  public static async login({ email, password }: LoginRequestBody) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid email or password');

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'my_dummy_secret_key',
      { expiresIn: '1h' }
    );

    return {
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    };
  }
}
