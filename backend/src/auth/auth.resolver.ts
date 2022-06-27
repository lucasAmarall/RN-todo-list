import {User} from "../models/User";
import {
    Args,
    Mutation,
    Resolver,
} from '@nestjs/graphql';
import {LoginInput} from "./inputs/login-input";
import {AuthService} from "./auth.service";

@Resolver(() => User)
export class AuthResolver {
    constructor(
        private authService: AuthService) {
    }

    @Mutation(() => User)
    async login(@Args('input') loginInput: LoginInput): Promise<User> {
        return this.authService.login(loginInput);
    }


}