import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeEntity } from './models/user-type.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeEntity])],
  exports: [TypeOrmModule],
})
export class UserTypeModule {}
