import {Field, ObjectType} from '@nestjs/graphql';
import {BaseModel} from './BaseModel';
import {Max} from "class-validator";
import {User} from "./User";

@ObjectType()
export class Todo extends BaseModel {
    @Field()
    @Max(255)
    description: string;
    @Field({defaultValue: false})
    complete: boolean;
    @Field(() => User)
    user?: User;
    userId?: number;
}
