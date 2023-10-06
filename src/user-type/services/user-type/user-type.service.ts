import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrUpdateTypeUserDto } from 'src/user-type/dto/create-userType.dto';
import { UserType } from 'src/user-type/models';
import { Repository } from 'typeorm';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>
  ) {}

  async save(userType: CreateOrUpdateTypeUserDto) {
    const createTypeUser = await this.userTypeRepository.save(userType);

    return createTypeUser;
  }

  async userTypeAll(): Promise<UserType[]> {
    return this.userTypeRepository.find();
  }
}
