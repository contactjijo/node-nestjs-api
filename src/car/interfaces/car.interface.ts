import * as mongoose from "mongoose";

export interface ICar extends mongoose.Document {
    readonly _id: string;
    readonly brand: string;
    readonly color: string;
    readonly model: string;
}
