import { Injectable, HttpException, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ICar } from "./interfaces/car.interface";
import { CarDto } from "./car.dto";

const carProjection = {
    __v: false,
    _id: true,
};

@Injectable()
export class CarService {
    constructor(@InjectModel("Car") private readonly carModel: Model<ICar>) {}

    /**
     *
     * @returns get all cars
     */
    public async getCars() {
        const cars = await this.carModel.find({}, carProjection).exec();
        return cars;
    }

    /**
     *
     * @param nawCar creation
     * @returns
     */
    public async postCar(nawCar: CarDto) {
        const car = new this.carModel(nawCar);
        return await car.save();
    }

    /**
     *
     * @param id get a particular car
     * @returns
     */
    public async getCarById(id: string) {
        const car = await this.findItem(id);
        return car;
    }

    public async updateCarDetails(newCarData: CarDto) {
        const itemToUpdate = await this.findItem(newCarData._id);
        if (newCarData.brand) {
            itemToUpdate.brand = newCarData.brand;
        }
        if (newCarData.color) {
            itemToUpdate.color = newCarData.color;
        }
        if (newCarData.model) {
            itemToUpdate.model = newCarData.model;
        }
        return itemToUpdate.save();
    }

    /**
     *
     * @param itemId Method for deleting an item
     * @returns
     */
    public async deleteCarById(itemId: string) {
        const car = await this.carModel.deleteOne({ _id: itemId }).exec();
        if (car.deletedCount === 0) {
            throw new HttpException("Not Found", 404);
        }
        return car.deletedCount;
    }

    // public async putCarById(
    //     id: string,
    //     propertyName: string,
    //     propertyValue: string
    // ) {
    //     const car = await this.carModel
    //         .findOneAndUpdate(
    //             { _id: id },
    //             {
    //                 [propertyName]: propertyValue,
    //             }
    //         )
    //         .exec();
    //     if (!car) {
    //         throw new HttpException("Not Found", 404);
    //     }
    //     return car;
    // }

    private async findItem(id: string) {
        let item;
        try {
            item = await this.carModel
                .findById({ _id: id }, carProjection)
                .exec();
        } catch (error) {
            throw new NotFoundException("Could not find the item.");
        }
        if (!item) {
            throw new NotFoundException("Could not find item.");
        }
        return item;
    }
}
