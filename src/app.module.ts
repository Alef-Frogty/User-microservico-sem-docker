import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service'; // Se não em módulo separado

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule],
  providers: [PrismaService],
})
export class AppModule {}
