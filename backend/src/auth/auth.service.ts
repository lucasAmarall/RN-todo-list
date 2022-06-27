import {PrismaService} from 'nestjs-prisma';
import {User} from '../models/User';
import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {LoginInput} from "./inputs/login-input";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private jwtService: JwtService) {
    }

    async login(
        loginInput: LoginInput
    ): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: {
                email: loginInput.email,
            },
        });
        if (!user) throw new NotFoundException('invalid email');
        const passwordMatches = await bcrypt.compare(loginInput.password, user.password);
        if (!passwordMatches) throw new BadRequestException('invalid password');
        return {
            ...user,
            accessToken: this.jwtService.sign({id: user.id, email: user.email})
        };
    }
}
