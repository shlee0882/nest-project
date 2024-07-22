import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostType } from './dto/post-type.dto';
import { Post } from './schemas/post.schema';

@Resolver(() => PostType)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [PostType])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => PostType)
  async post(@Args('id') id: string): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @Mutation(() => PostType)
  async createPost(@Args('createPostInput') createPostInput: CreatePostDto): Promise<Post> {
    return this.postsService.create(createPostInput);
  }

  @Mutation(() => PostType)
  async updatePost(@Args('id') id: string, @Args('updatePostInput') updatePostInput: CreatePostDto): Promise<Post> {
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => PostType)
  async deletePost(@Args('id') id: string): Promise<Post> {
    return this.postsService.remove(id);
  }
}
