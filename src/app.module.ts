import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemModule } from './todo-item/todo-item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'reproducible',
      username: 'reproducible',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      port: 5432,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // set to true to automatically generate schema
      autoSchemaFile: 'src/schema.gql',
      driver: ApolloDriver,
    }),
    TodoItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
