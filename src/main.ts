import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/configs';

async function bootstrap() {
    // console.log('Process Environment Details =>', process.env);
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
}
bootstrap();
