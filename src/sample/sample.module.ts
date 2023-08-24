import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
