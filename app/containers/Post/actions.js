/*
 *
 * Post actions
 *
 */

import { GET_POST_ACTION, GET_POST_ERROR, GET_POST_SUCCESS } from './constants';

export const getPostAction = (lang, id) => ({
  type: GET_POST_ACTION,
  lang,
  id,
});

export const getPostError = (err) => ({
  type: GET_POST_ERROR,
  err,
});

export const getPostSuccess = (post) => ({
  type: GET_POST_SUCCESS,
  post,
});
