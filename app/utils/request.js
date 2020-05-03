/* eslint-disable prettier/prettier */
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { capitalize } from '../../helpers/data.hepler';

const client = new ApolloClient({
  uri: 'https://api-dn.herokuapp.com/admin/api',
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
          excerpt${capitalize(lang)}
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
          id
        }
        allPosts(where: {category_some: { id: "${catID}" }}, orderBy: "createdAt_DESC") {
          id
          title${capitalize(lang)}
          excerpt${capitalize(lang)}
          thumbnail
          slug
        }
      }
    `,
  });

export const getPostBySearch = ({ lang, key }) =>
  client.query({
    query: gql`
      {
        allPosts (where: { title${capitalize(lang)}_contains_i: "${key}"}, orderBy: "createdAt_DESC") {
          id
          title${capitalize(lang)}
          excerpt${capitalize(lang)}
          thumbnail
          slug
        }
      }
    `,
  });
