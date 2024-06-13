import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_PHOTO = gql`
  mutation savePhoto($photoData: PhotoInput) {
    savePhoto(photoData: $photoData) {
      _id
      username
      email
      savedPhotos {
        photoId
        alt
        photographer
        smSrc
        medSrc
        orgSrc
        lgSrc
        xlSrc
        url
        createdAt
      }
    }
  }
`;
export const REMOVE_PHOTO = gql`
  mutation removePhoto($photoId: ID!) {
    removePhoto(photoId: $photoId) {
      _id
      username
      email
      savedPhotos {
        photoId
        alt
        photographer
        smSrc
        medSrc
        orgSrc
        lgSrc
        xlSrc
        url
        createdAt
      }
    }
  }
`;