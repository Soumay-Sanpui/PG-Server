import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.fullName = createUserDto.fullName;
    newUser.phoneNumber = createUserDto.phoneNumber;
    newUser.password = createUserDto.password;
    newUser.username = createUserDto.username;

    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] | string {
    if(this.users.length > 0) {
      return this.users;
    }
    return "No Users Found !";
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
