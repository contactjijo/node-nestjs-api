import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot(
            'mongodb+srv://demo-user:7d7H1ZOyktYg6J50@cluster0.3fnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        ),
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
