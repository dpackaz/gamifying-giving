import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

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

export const ADD_FRIEND = gql`
  mutation addFriend($addFriendId: ID!, $friendId: ID!) {
    addFriend(id: $addFriendId, friendId: $friendId) {
      _id
    }
  }
`;
export const ADD_CHARITY_TO_USER = gql`
  mutation addCharity($addCharityId: ID!, $charityName: String!){
    addCharity(id: $addCharityId, charityName: $charityName){
      _id
      firstName
      lastName
    }
  }  
`;
