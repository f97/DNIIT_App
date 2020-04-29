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
        allPosts(orderBy: "createdAt_DESC") {
          id
          title${capitalize(lang)}
          excerpt${capitalize(lang)}
          thumbnail
          slug
        }
      }
    `,
  });

export const getPostRequest = ({ lang, id }) =>
  client.query({
    query: gql`
      {
        Post(where: { id: "${id}"}) {
          title${capitalize(lang)}
          content${capitalize(lang)}
          category {
            id
            name${capitalize(lang)}
          }
          updatedAt
          createdAt
        }
      }
    `,
  });

export const getPageRequest = ({ lang, id }) =>
  client.query({
    query: gql`
      {
        Page(where: { id: "${id}"}) {
          title${capitalize(lang)}
          content${capitalize(lang)}
          updatedAt
          createdAt
        }
      }
    `,
  });

export const getPostByCatRequest = ({ lang, catID }) =>
  client.query({
    query: gql`
      {
        Category(where: {id: "${catID}" }) {
          name${capitalize(lang)}
        }
        allPosts(where: { category_some: { id: "${catID}" } }) {
          id
          title${capitalize(lang)}
          excerpt${capitalize(lang)}
          thumbnail
          slug
        }
      }
    `,
  });
