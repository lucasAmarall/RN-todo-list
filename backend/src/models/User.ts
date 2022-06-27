import {Field, HideField, ObjectType} from '@nestjs/graphql';

import {BaseModel} from './BaseModel';
import {IsEmail} from "class-validator";
import {Todo} from "./Todo";

@ObjectType()
export class User extends BaseModel {
    @Field()
    @IsEmail()
    email: string;
    @HideField()
    password: string;
    @Field(() => [Todo], { nullable: true})
    todos?: Todo[];
    @Field({nullable: true})
    accessToken?: string;
}
