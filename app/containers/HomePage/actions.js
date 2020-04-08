/*
 *
 * HomePage actions
 *
 */

import {
  GET_POSTS_ACTION,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
} from './constants';

export const getPostsAction = (lang) => ({
  type: GET_POSTS_ACTION,
  lang,
});

export const getPostsError = (err) => ({
  type: GET_POSTS_ERROR,
  err,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts,
});
