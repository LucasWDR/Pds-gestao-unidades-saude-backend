import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeController } from './controllers/user-type/user-type.controller';
import { UserType } from './models/user-type.model';
import { UserTypeService } from './services/user-type/user-type.service';

const UserTypeOrmModule = TypeOrmModule.forFeature([UserType]);

@Module({
  imports: [UserTypeOrmModule],
  controllers: [UserTypeController],
  providers: [UserTypeService],
  exports: [UserTypeOrmModule, UserTypeService],
})
export class UserTypeModule {}
