import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, JwtService],
})
export class UsersModule {}
