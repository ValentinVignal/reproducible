import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType('TodoItemCreate')
export class TodoItemCreateDTO {
  @IsString()
  @Field()
  title!: string;

  @IsBoolean()
  @Field()
  completed!: boolean;
}
