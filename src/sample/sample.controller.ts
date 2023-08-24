import { Body, Controller, Post } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private sampleService: SampleService) {}

  @Post('/sql')
  async saveToSql(@Body() body: any) {
    this.sampleService.createSQLData(body);
  }

  @Post('/mongo')
  async saveToMongo(@Body() body: any) {
    this.sampleService.createMongoData(body);
  }
}
