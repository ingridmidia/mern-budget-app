import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    addUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
        password
      }
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome(
    $amount: Float!
    $createdAt: String!
    $description: String
  ) {
    addIncome(
      amount: $amount
      createdAt: $createdAt
      description: $description
    ) {
      incomes {
        _id
        amount
        description
        createdAt
      }
    }
  }
`;

export const UPDATE_INCOME = gql`
  mutation updateIncome(
    $incomeId: ID!
    $amount: Float!
    $description: String
    $createdAt: String!
  ) {
    updateIncome(
      incomeId: $incomeId
      amount: $amount
      description: $description
      createdAt: $createdAt
    ) {
      incomes {
        _id
        amount
        description
        createdAt
      }
    }
  }
`;

export const DELETE_INCOME = gql`
  mutation deleteIncome($incomeId: ID!) {
    deleteIncome(incomeId: $incomeId) {
      incomes {
        _id
        amount
        createdAt
        description
      }
    }
  }
`;
