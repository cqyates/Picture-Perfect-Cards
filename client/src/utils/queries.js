import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedPhotos {
        _id
        photoId
        alt
        lgSrc
        medSrc
        orgSrc
        url
        photographer
        smSrc
        xlSrc
        createdAt
      }
    }
  }
`;
