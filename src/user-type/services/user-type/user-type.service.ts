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

  async findById(userTypeId: string): Promise<UserType> {
    return this.findById(userTypeId);
  }

  async update(userTypeId: string, userTypeDto: CreateOrUpdateTypeUserDto) {
    /* const findUserTypeId = await this.userTypeRepository
      .createQueryBuilder('user-type')
      .where('id = :id', { id: userTypeId })
      .getOne();

    if (!findUserTypeId) {
      throw new NotFoundException('This user type does not exists');
    } */

    const userTypeUpdated = await this.userTypeRepository
      .createQueryBuilder('user-type')
      .update()
      .set({
        name: userTypeDto.name,
      })
      .where('id = :id', { id: userTypeId })
      .execute();

    return userTypeUpdated;
  }

  async deleteById(userTypeId: string) {
    const userTypeDeleted = await this.userTypeRepository.findOne({
      where: { id: userTypeId },
    });

    await this.userTypeRepository.remove(userTypeDeleted);
  }
}
