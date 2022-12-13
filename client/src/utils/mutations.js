import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
//TODO: Not Implemented yet
export const CREATE_DONATION = gql`
  mutation createDonation($user: String!, $charity: String!) {
    createDonation(user: $user, charity: $charity) {
      _id
      user
      charity
    }
  }
`;
//TODO: createDrive => addDrive
export const CREATE_DRIVE = gql`
  mutation createDrive($user: String!, $charity: String!) {
    createDrive(user: $user, charity: $charity) {
      _id
      user
      charity
      drive {
        _id
        goal
      }
    }
  }
`;
