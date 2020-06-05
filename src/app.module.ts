import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FizzBuzz } from './FizzBuzz';

@Module({
  imports: [],
  providers: [AppService, FizzBuzz],
  exports: [AppService],
})
export class AppModule {}
