import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserTypeService } from 'src/user-type/services/user-type/user-type.service';
import { ListUserTypeDTO } from 'src/user-type/dto/list-userType.dto';
import { CreateOrUpdateTypeUserDto } from 'src/user-type/dto/create-userType.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('user-type')
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {}

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
  @Post('/create')
  public async create(@Body() userType: CreateOrUpdateTypeUserDto) {
    try {
      return ListUserTypeDTO.toDto(await this.userTypeService.save(userType));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `was not created`,
        },
        404
      );
    }
  }
  @Get('/all')
  public async findAll(): Promise<ListUserTypeDTO[]> {
    const userTypeAll = await this.userTypeService.userTypeAll();
    return userTypeAll.map<ListUserTypeDTO>(ListUserTypeDTO.toDto);
  }

  @Patch('/update/:id')
  public async update(
    @Param('id') userTypeId: string,
    @Body() userType: CreateOrUpdateTypeUserDto
  ) {
    return await this.userTypeService.update(userTypeId, userType);
  }

  @Delete('/delete/:id')
  public async delete(@Param('id') userTypeId: string): Promise<void> {
    return this.userTypeService.deleteById(userTypeId);
  }
}
