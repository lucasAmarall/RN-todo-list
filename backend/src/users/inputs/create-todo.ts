import { InputType, Field } from '@nestjs/graphql';
import {Max} from "class-validator";

@InputType()
export class CreateTodoInput {
    @Field()
    @Max(255)
    description: string;
}
