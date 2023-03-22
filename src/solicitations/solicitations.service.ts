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
    tracking,
    address,
  }: CreateSolicitationDto) {
    const solicitation = await this.prisma.solicitations.create({
      data: {
        userId,
        productName,
        category,
        userCpf,
        tracking,
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

  findOne(id: number) {
    return `This action returns a #${id} solicitation`;
  }

  update(id: number, updateSolicitationDto: UpdateSolicitationDto) {
    return `This action updates a #${id} solicitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitation`;
  }
}
