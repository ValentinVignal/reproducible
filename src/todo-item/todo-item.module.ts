import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { TodoItemCreateInput } from './create-todo-item.input';
import { TodoItemDTO } from './todo-item.dto/todo-item.dto';
import { TodoItemEntity } from './todo-item.entity/todo-item.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          EntityClass: TodoItemEntity,
          DTOClass: TodoItemDTO,
          CreateDTOClass: TodoItemCreateInput,
          read: {
            enableFetchAllWithNegative: true,
            pagingStrategy: PagingStrategies.OFFSET,
          },
        },
      ],
    }),
  ],
})
export class TodoItemModule {}
