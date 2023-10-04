import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserTypeService } from 'src/user-type/services/user-type/user-type.service';
import { ListUserType } from 'src/user-type/dto/list-userType.dto';
import { CreateOrUpdateTypeUserDto } from 'src/user-type/dto/create-userType.dto';

@Controller('user-type')
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Data has been recorded successfully',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Request succesfully',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  @Post()
  public async create(@Body() userType: CreateOrUpdateTypeUserDto) {
    try {
      return ListUserType.toDto(await this.userTypeService.save(userType));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `was not created`,
        },
        404,
      );
    }
  }
}
