import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from "./users/users.module";
import {PrismaModule} from "nestjs-prisma";
import {AppResolver} from "./app.resolver";
import {AuthModule} from "./auth/auth.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.graphql',
      playground: true,
    }),
    AuthModule,
    UsersModule
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
