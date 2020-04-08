import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { capitalize } from '../../helpers/data.hepler';

const client = new ApolloClient({
  uri: 'https://dniit-api.herokuapp.com/admin/api',
});

export const getPostsRequest = ({ lang }) =>
  client.query({
    query: gql`
      {
        allPosts {
          title${capitalize(lang)}
          content${capitalize(lang)}
          slug
        }
      }
    `,
  });
