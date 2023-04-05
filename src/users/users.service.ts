import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.findByEmail(createUserDto.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 8),
    };

    const user = await this.prisma.users.create({
      data,
    });

    return user;
  }

  async findByEmail(email: string) {
    const userEmail = await this.prisma.users.findFirst({
      where: { email: email },
    });

    return userEmail;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await this.prisma.users.delete({ where: { id } });
  }
}
