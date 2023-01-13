import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { TodoItemCreateDTO } from './todo-item.create.dto/todo-item.create.dto';
import { TodoItemDTO } from './todo-item.dto/todo-item.dto';
import { TodoItemEntity } from './todo-item.entity/todo-item.entity';
import { TodoItemUpdateDTO } from './todo-item.update.dto/todo-item.update.dto';

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
          UpdateDTOClass: TodoItemUpdateDTO,
          CreateDTOClass: TodoItemCreateDTO,
        },
      ],
    }),
  ],
})
export class TodoItemModule {}
