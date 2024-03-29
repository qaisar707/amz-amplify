import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly orders?: (ProductOrders | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly orders: AsyncCollection<ProductOrders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderNumber: string;
  readonly products?: (ProductOrders | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderNumber: string;
  readonly products: AsyncCollection<ProductOrders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerProductOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly orderId?: string | null;
  readonly product: Product;
  readonly order: Order;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly orderId?: string | null;
  readonly product: AsyncItem<Product>;
  readonly order: AsyncItem<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductOrders = LazyLoading extends LazyLoadingDisabled ? EagerProductOrders : LazyProductOrders

export declare const ProductOrders: (new (init: ModelInit<ProductOrders>) => ProductOrders) & {
  copyOf(source: ProductOrders, mutator: (draft: MutableModel<ProductOrders>) => MutableModel<ProductOrders> | void): ProductOrders;
}