import { BaseModel } from 'src/entity/base.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user-type' })
export class UserType extends BaseModel<UserType> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;
}
