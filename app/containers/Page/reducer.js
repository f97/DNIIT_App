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

const convertToCommonpPost = (page, lang) => {
  const newPage = {
    ...page,
    title: page[`title${capitalize(lang)}`],
    content: page[`content${capitalize(lang)}`],
  };
  delete newPage[`title${capitalize(lang)}`];
  delete newPage[`content${capitalize(lang)}`];
  return newPage;
};

/* eslint-disable default-case, no-param-reassign */
const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PAGE_ACTION:
        draft.lang = action.lang;
        break;
      case GET_PAGE_SUCCESS:
        draft.page = convertToCommonpPost(action.page, state.lang);
        break;
    }
  });

export default postReducer;
