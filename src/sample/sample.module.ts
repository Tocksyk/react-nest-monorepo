import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    JwtModule,
    PassportModule,
    AuthModule,
    SequelizeModule.forFeature([User]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
