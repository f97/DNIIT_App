/*
 *
 * Search actions
 *
 */

import {
  GET_POSTS_ACTION,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
} from './constants';

export const getPostsAction = (lang, key) => ({
  type: GET_POSTS_ACTION,
  lang,
  key,
});

export const getPostsError = (err) => ({
  type: GET_POSTS_ERROR,
  err,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts,
});
