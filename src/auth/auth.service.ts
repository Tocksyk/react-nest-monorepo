import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async validateUser(username: string, password: string): Promise<any> {
    /**
     * Any sort of validation logic will be here
     * for example:
     *  1. checking password hash in the databaase
     *  2. checking user in the database
     *  3. verifying email .etc.
     */
    return {
      username: username,
      password: password,
      email: 'sample@gmail.com',
      role: 'User',
    };
  }
  async login(user: any) {
    const payload = {
      username: user.username,
      email: user.email,
      password: user.password,
      sub: user._id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
