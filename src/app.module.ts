import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { SolicitationsModule } from './solicitations/solicitations.module';

@Module({
  imports: [UsersModule, SolicitationsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
