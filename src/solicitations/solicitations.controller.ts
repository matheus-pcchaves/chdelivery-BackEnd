import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';

@Controller('solicitations')
export class SolicitationsController {
  constructor(private readonly solicitationsService: SolicitationsService) {}

  @Post('/create')
  async create(
    @Body()
    {
      userId,
      productName,
      category,
      userCpf,
      tracking,
      address,
    }: CreateSolicitationDto,
  ) {
    return await this.solicitationsService.create({
      userId,
      productName,
      category,
      userCpf,
      tracking,
      address,
    });
  }

  @Get()
  async findAll() {
    return await this.solicitationsService.findAll();
  }

  @Get('/user/:id')
  async findOneByUser(@Param('id') userId: string) {
    return this.solicitationsService.findByUser(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolicitationDto: UpdateSolicitationDto,
  ) {
    return this.solicitationsService.update(+id, updateSolicitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitationsService.remove(+id);
  }
}
