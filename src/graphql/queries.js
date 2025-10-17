/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      products {
        items {
          id
          product_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user
        date
        total
        products {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const productOrdersByProduct_idAndOrder_id = /* GraphQL */ `
  query ProductOrdersByProduct_idAndOrder_id(
    $product_id: ID!
    $order_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productOrdersByProduct_idAndOrder_id(
      product_id: $product_id
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        product_id
        order_id
        product {
          id
          title
          description
          image
          price
          price_desc
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const productOrdersByOrder_idAndProduct_id = /* GraphQL */ `
  query ProductOrdersByOrder_idAndProduct_id(
    $order_id: ID!
    $product_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productOrdersByOrder_idAndProduct_id(
      order_id: $order_id
      product_id: $product_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        product_id
        order_id
        product {
          id
          title
          description
          image
          price
          price_desc
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const ordersByUser = /* GraphQL */ `
  query OrdersByUser(
    $user: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        date
        total
        products {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      title
      description
      image
      price
      price_desc
      orders {
        items {
          id
          product_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        image
        price
        price_desc
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
