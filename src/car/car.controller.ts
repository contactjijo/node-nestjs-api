import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
} from "@nestjs/common";
import { CarService } from "./car.service";
import { CarDto } from "./car.dto";

@Controller("car")
export class CarController {
    constructor(private carService: CarService) {}

    @Get()
    async getCars() {
        let carList = this.carService.getCars();
        return carList;
    }

    @Get(":id")
    async getCarById(@Param("id") id: string) {
        return this.carService.getCarById(id);
    }

    @Post()
    async postCar(@Body() car: CarDto) {
        return this.carService.postCar(car);
    }

    @Delete(":id")
    async deleteCarById(@Param("id") id: string) {
        return this.carService.deleteCarById(id);
    }

    @Patch(":id")
    async updateCar(@Body() car: CarDto) {
        return this.carService.updateCarDetails(car);
    }

    // @Put(":id")
    // async putCarById(@Param("id") id: string, @Query() query) {
    //     const propertyName = query.property_name;
    //     const propertyValue = query.property_value;
    //     return this.carService.putCarById(id, propertyName, propertyValue);
    // }
}
