import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileDto } from './dto/get-profile.dto';

@Injectable()
export class ProfileService {
  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  getProfile(): ProfileDto {
    return {
      name: 'Dron',
      age: 20,
      address: 'Ukraine',
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
