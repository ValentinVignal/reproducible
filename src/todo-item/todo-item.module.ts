import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
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
          DTOClass: TodoItemDTO,
          EntityClass: TodoItemEntity,
          create: { disabled: true },
          update: { disabled: true },
          delete: { disabled: true },
          read: {
            one: { disabled: true },
            many: {
              name: 'todoItemCursor',
            },
          },
        },

        {
          DTOClass: TodoItemDTO,
          EntityClass: TodoItemEntity,
          pagingStrategy: PagingStrategies.OFFSET,
          create: { disabled: true },
          update: { disabled: true },
          delete: { disabled: true },
          read: {
            one: { disabled: true },
            many: {
              name: 'todoItemOffset',
            },
          },
        },
      ],
    }),
  ],
})
export class TodoItemModule {}
