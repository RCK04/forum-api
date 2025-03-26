import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

// Auth Rota principal
@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  // Rota sigin
  @Post('signin')
  // Tipo de método
  @HttpCode(HttpStatus.OK)
  signin(@Body() body: Prisma.UserCreateInput) {
    return this.authService.signin(body);
  }
}
