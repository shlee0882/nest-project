import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return post;
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return newPost.save();
  }

  async update(id: string, updatePostDto: CreatePostDto): Promise<Post> {
    const existingPost = await this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
    if (!existingPost) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return existingPost;
  }

  async remove(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
    if (!deletedPost) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return deletedPost;
  }
}
