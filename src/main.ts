import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PORT } from './config/configs';

async function bootstrap() {
    // console.log('Process Environment Details =>', process.env);
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Products')
        .setDescription('The Products API methods')
        .setVersion('1.0')
        .addTag('products')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(PORT);
}
bootstrap();


