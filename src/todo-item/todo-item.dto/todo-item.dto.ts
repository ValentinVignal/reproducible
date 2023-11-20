import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  KeySet,
} from '@ptc-org/nestjs-query-graphql';

@ObjectType('TodoItem')
@KeySet(['id'])
export class TodoItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
