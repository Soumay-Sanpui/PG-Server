import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  /**
   * Service Function to create a user.
   * @param createUserDto
   * @returns User
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create({
      email: createUserDto.email,
      fullName: createUserDto.fullName,
      phoneNumber: createUserDto.phoneNumber,
      password: createUserDto.password,
      username: createUserDto.username,
    });

    return await this.usersRepository.save(newUser);
  }

  /**
   * Service Function to fetch all the users.
   */
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { id: id as any } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { username } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.usersRepository.update(id, updateUserDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
