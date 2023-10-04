import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from 'src/entity/base.dto';
import { UserType } from '../models/user-type.model';

export class ListUserType extends BaseDTO<ListUserType> {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  static toDto(entity: UserType) {
    return new ListUserType({
      id: entity.id,
      name: entity.name,
    });
  }
}
