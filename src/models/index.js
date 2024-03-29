// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Order, ProductOrders } = initSchema(schema);

export {
  Product,
  Order,
  ProductOrders
};