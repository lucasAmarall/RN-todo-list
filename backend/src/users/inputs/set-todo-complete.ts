import { InputType, Field } from '@nestjs/graphql';
import {Max} from "class-validator";

@InputType()
export class SetTodoCompleteInput {
    @Field()
    todoId: number;
}
