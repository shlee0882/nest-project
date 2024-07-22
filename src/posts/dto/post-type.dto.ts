import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PostType {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  author: string;
}
