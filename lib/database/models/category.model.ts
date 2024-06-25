import { ObjectId } from "mongoose";
import { Schema, Document, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: any;
  name: String;
}

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
