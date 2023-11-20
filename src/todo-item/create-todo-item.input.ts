import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType('CreateTodoItem')
export class TodoItemCreateInput {
  @IsString()
  @Field()
  title!: string;

  @IsBoolean()
  @Field()
  completed!: boolean;
}
