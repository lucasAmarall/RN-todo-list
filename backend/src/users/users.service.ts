import {BadRequestException, Injectable} from '@nestjs/common';
import {PrismaService} from "nestjs-prisma";
import {User} from '../models/User'
import {Todo} from "../models/Todo";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.prisma.user.findFirst(
            {
                where: {email},
                include: {
                    todos: true
                }
            },
            );
    }

    async createTodo(user: User, description: string): Promise<Todo> {
        return this.prisma.todo.create({
            data: {
                description,
                complete: false,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
    }

    async setTodoComplete(user: User, todoId: number): Promise<Todo> {
        const todo = await this.prisma.todo.findFirst({
            where: {
                id: todoId,
                user: {
                    id: user.id
                }
            },
        })

        if (!todo) throw new BadRequestException('invalid Todo');
        return this.prisma.todo.update({
            data: {
                complete: true
            },
            where: {
                id: todoId
            }
        })
    }
}
