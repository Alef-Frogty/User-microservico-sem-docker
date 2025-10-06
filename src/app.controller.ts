import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt')) // Protege todos os endpoints
export class UsersController {
  @Get('profile')
  getProfile() {
    return { message: 'Perfil protegido acessado!' }; // Aqui você pode injetar user do request
  }
}
