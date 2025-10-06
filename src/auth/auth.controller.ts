import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto'; // <-- Importe o DTO correto (era CreateUser  Dto com espaço? Corrija)
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class AuthController {
  constructor(private readonly authService: AuthService) {} // <-- Tipagem explícita: AuthService (resolve unsafe assignment)

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.register(createUserDto); // <-- Await e tipagem implícita
    return { message: 'Usuário criado', userId: user.id };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas'); // <-- Mensagem explícita, resolve unsafe construction
    }
    return this.authService.login(user);
  }
}
