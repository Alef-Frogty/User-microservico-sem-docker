import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  createUser(@Body() body: { nome: string; email: string; age: number }) {
    console.log(' Dados recebidos do front:', body);
    return {
      message: 'Usuário recebido com sucesso!',
      dados: body,
    };
  }
}
