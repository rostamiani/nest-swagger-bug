import { Post } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';
import { PaginationFilterDto, RequiredDto } from './pagination.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiQuery({ type: PaginationFilterDto })
  @ApiQuery({
    name: 'test',
    description: 'This parameter is OK and will be in the request',
    example: 1,
  })
  @Get()
  getHello(@Query() pagination: PaginationFilterDto): string {
    console.log(pagination);

    return this.appService.getHello();
  }

  @ApiQuery({ type: RequiredDto })
  @Post()
  required(@Query() required: RequiredDto) {
    console.log(required);
  }
}
