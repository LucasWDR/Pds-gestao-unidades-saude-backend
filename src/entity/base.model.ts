import * as R from 'ramda';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseModel<T> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  constructor(data?: Partial<T>) {
    const isNotUndefined = (val) => val !== undefined;
    const parsedData = R.pickBy(isNotUndefined, data);
    Object.assign(this, parsedData);
  }
}
