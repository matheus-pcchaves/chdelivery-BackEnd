import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';

@Injectable()
export class SolicitationsService {
  constructor(private prisma: PrismaService) {}
  async create({
    userId,
    productName,
    category,
    userCpf,
    address,
  }: CreateSolicitationDto) {
    const solicitation = await this.prisma.solicitations.create({
      data: {
        userId,
        productName,
        category,
        userCpf,
        address,
      },
    });

    return solicitation;
  }

  async findAll() {
    const solicitations = await this.prisma.solicitations.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return solicitations;
  }

  async findByUser(userId: string) {
    const user = await this.prisma.solicitations.findMany({
      where: { userId },
    });
    return user;
  }

  update(id: number, updateSolicitationDto: UpdateSolicitationDto) {
    return `This action updates a #${id} solicitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitation`;
  }
}
