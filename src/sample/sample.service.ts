import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { InjectModel as InjectSequelizeModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class SampleService {
  constructor(
    @InjectSequelizeModel(User)
    private readonly userModel: typeof User,
    @InjectModel('User') private readonly userMongoModel: Model<UserDocument>,
  ) {}

  createSQLData(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      username: createUserDto.username,
      password: createUserDto.password,
      email: createUserDto.email,
      roles: createUserDto.roles,
    });
  }

  createMongoData(createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.userMongoModel.create({
      username: createUserDto.username,
      password: createUserDto.password,
      email: createUserDto.email,
      roles: createUserDto.roles,
    });
  }
}
