import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductDemoModule } from './product_demo/product_demo.module';

@Module({
  imports: [ProductDemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
