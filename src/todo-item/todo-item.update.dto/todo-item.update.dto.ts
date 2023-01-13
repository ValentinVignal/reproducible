import { Field, InputType } from '@nestjs/graphql';
import { UpdateOneInputType } from '@ptc-org/nestjs-query-graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { TodoItemDTO } from '../todo-item.dto/todo-item.dto';

@InputType('TodoItemUpdate')
export class TodoItemUpdateDTO {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  title?: string;

  @IsOptional()
  @IsBoolean()
  @Field({ nullable: true })
  completed?: boolean;
}

@InputType()
export class UpdateOneTodoItemsInput extends UpdateOneInputType(
  TodoItemDTO, // filter
  TodoItemUpdateDTO, // update DTO
) {}
