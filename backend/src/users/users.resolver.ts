import {
    Args,
    Context, Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql';
import {UsersService} from './users.service';
import {User} from '../models/User';
import {ExecutionContext, Req, UseGuards} from "@nestjs/common";
import {GqlAuthGuard} from "../middlewares/gql-auth.guard";
import {Todo} from "../models/Todo";
import {CreateTodoInput} from "./inputs/create-todo";
import {SetTodoCompleteInput} from "./inputs/set-todo-complete";

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private usersService: UsersService) {
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => User)
    async todosByUser(@Context() context): Promise<User> {
        const {email} = context.req.user;
        return this.usersService.getUserByEmail(email)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Todo)
    async createTodo(@Context() context, @Args('input') input: CreateTodoInput): Promise<Todo> {
        const {user} = context.req;
        const {description} = input;
        return this.usersService.createTodo(user, description)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Todo)
    async setTodoComplete(@Context() context, @Args('input') input: SetTodoCompleteInput): Promise<Todo> {
        const {user} = context.req;
        const {todoId} = input;
        return this.usersService.setTodoComplete(user, todoId)
    }

}