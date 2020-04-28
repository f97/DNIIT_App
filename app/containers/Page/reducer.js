/*
 *
 * Page reducer
 *
 */
import produce from 'immer';
import { GET_PAGE_ACTION, GET_PAGE_SUCCESS } from './constants';
import { capitalize } from '../../../helpers/data.hepler';

export const initialState = {
  page: {},
};

const convertToCommonpPost = (post, lang) => {
  const newPost = {
    ...post,
    title: post[`title${capitalize(lang)}`],
    content: post[`content${capitalize(lang)}`],
  };
  delete newPost[`title${capitalize(lang)}`];
  delete newPost[`content${capitalize(lang)}`];
  return newPost;
};

/* eslint-disable default-case, no-param-reassign */
const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PAGE_ACTION:
        draft.lang = action.lang;
        break;
      case GET_PAGE_SUCCESS:
        draft.post = convertToCommonpPost(action.page, state.lang);
        break;
    }
  });

export default postReducer;
