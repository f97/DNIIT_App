/*
 *
 * Page actions
 *
 */

import { GET_PAGE_ACTION, GET_PAGE_ERROR, GET_PAGE_SUCCESS } from './constants';

export const getPageAction = (lang, id) => ({
  type: GET_PAGE_ACTION,
  lang,
  id,
});

export const getPageError = (err) => ({
  type: GET_PAGE_ERROR,
  err,
});

export const getPageSuccess = (page) => ({
  type: GET_PAGE_SUCCESS,
  page,
});
