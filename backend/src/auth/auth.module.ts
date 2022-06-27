import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from '../middlewares/gql-auth.guard';
import { AuthService } from './auth.service';
import {JwtStrategy} from "../middlewares/jwt.strategy";
import {AuthResolver} from "./auth.resolver";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy , GqlAuthGuard, AuthResolver],
  exports: [GqlAuthGuard],
})
export class AuthModule {}
