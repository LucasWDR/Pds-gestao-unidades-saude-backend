import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrUpdateTypeUserDto } from 'src/user-type/dto/create-userType.dto';
import { UserTypeRepository } from 'src/user-type/repositories/user-type.repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserTypeRepository)
    private userTypeRepository: UserTypeRepository,
  ) {}

  @Transactional()
  async save(userType: CreateOrUpdateTypeUserDto) {
    const createTypeUser = await this.userTypeRepository.save(userType);

    return createTypeUser;
  }
}
