import { ApiProperty } from '@nestjs/swagger';

export class PaginationFilterDto {
  @ApiProperty({
    required: false,
    example: 1,
    description: 'This parameters will not be in the request',
  })
  readonly page?: number;

  @ApiProperty({ required: false, example: 1 })
  readonly limit?: number;

  @ApiProperty({ required: false, example: 1 })
  readonly search?: string;

  @ApiProperty({ required: false, example: 1 })
  readonly sort?: string;
}

export class RequiredDto {
  @ApiProperty({
    required: true,

    description: 'This parameter is required but always is blocking the code',
  })
  readonly search?: string;

  @ApiProperty({ required: true })
  readonly sort?: string;
}
