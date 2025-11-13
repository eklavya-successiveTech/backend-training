import mongoose from "mongoose";
import { Schema } from "mongoose";
import { faker } from "@faker-js/faker";


interface IOrderItem {
  productName: string;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  orderId: string;
  customerName: string;
  orderDate: Date;
  status: "Pending" | "Shipped" | "Delivered";
  items: IOrderItem[];
  totalAmount: number;
}

const OrderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true },
  customerName: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Shipped", "Delivered"], required: true },
  items: [
    {
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
});

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/NodePractise");
  console.log("Connected to DB");
};

const seedOrder = async () => {
    await connectDB();

  await OrderModel.deleteMany({});
  console.log("Old orders deleted");

  const statuses = ["Pending", "Shipped", "Delivered"];
  const data: IOrder[] = [];
  for (let i = 0; i < 20; i++) {
    const items = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => {
      return {
        productName: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 10 }),
        price: parseFloat(faker.commerce.price({ min: 10, max: 100 })),
      };
    });
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    data.push(
      new OrderModel({
        orderId: faker.string.uuid(),
        customerName: faker.person.fullName(),
        orderDate: faker.date.recent({ days: 180 }),
        status: faker.helpers.arrayElement(statuses),
        items,
        totalAmount: parseFloat(totalAmount.toFixed(2)),
      })
    );
  }
  await OrderModel.insertMany(data);
  console.log("Seeded 20 orders successfully");

  mongoose.connection.close();
};

seedOrder();