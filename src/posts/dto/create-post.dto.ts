import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostDto {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  author: string;
}
