import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleModule } from './sample/sample.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongoConfig from './configs/mongo.config';
import sqlConfig from './configs/sql.config';
import appConfig from './configs/app.config';
import spaConfig from './configs/spa.config';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, mongoConfig, sqlConfig, spaConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', process.env.SPA_1_PATH),
      exclude: [process.env.EXCLUDE_PREFIX],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<object>('mongoDB'),
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<object>('sql'),
    }),
    TerminusModule,
    HttpModule,
    SampleModule,
    AuthModule,
    HealthModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
