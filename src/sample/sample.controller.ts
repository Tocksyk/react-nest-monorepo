import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SampleService } from './sample.service';
import { LocalAuthGuard } from 'src/auth/guards/locals.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
@ApiBearerAuth()
@Controller('sample')
export class SampleController {
  constructor(
    private sampleService: SampleService,
    private authService: AuthService,
  ) {}

  @Post('/sql')
  async saveToSql(@Body() body: CreateUserDto) {
    this.sampleService.createSQLData(body);
  }

  @Post('/mongo')
  async saveToMongo(@Body() body: CreateUserDto) {
    this.sampleService.createMongoData(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body: CreateUserDto) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/protectedRoute')
  async protectedRoute() {
    return 'Successfully Authenticated...';
  }
}
