import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedPhotos {
        photoId
        smSrc
        lgSrc
        url
        photographer
        medSrc
        orgSrc
        alt
      }
    }
  }
`;
