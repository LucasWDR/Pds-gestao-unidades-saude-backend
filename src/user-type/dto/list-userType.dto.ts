import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from 'src/entity/base.dto';
import { UserType } from '../models/user-type.model';

export class ListUserTypeDTO extends BaseDTO<ListUserTypeDTO> {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  static toDto(entity: UserType) {
    return new ListUserTypeDTO({
      id: entity.id,
      name: entity.name,
    });
  }
}
