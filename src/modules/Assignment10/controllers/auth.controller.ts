import { Request, Response } from 'express';
import { LoginRequestBody } from '../../../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';

export class AuthController {
  public static async login(req: Request<{}, {}, LoginRequestBody>, res: Response): Promise<Response> {
    try {
      const result = await AuthService.login(req.body);
      return res.json({
        message: 'Login successful',
        ...result,
      });
    } catch (error: any) {
      return res.status(401).json({ error: error.message || 'Unauthorized' });
    }
  }
}
