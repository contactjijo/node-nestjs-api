import { CarModule } from "./car/car.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DB_CONNECTION_URI } from "./config/configs";
import { ProductsModule } from "./products/products.module";
@Module({
    imports: [
        CarModule,
        ProductsModule,
        MongooseModule.forRoot(DB_CONNECTION_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
    ],

    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
