/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { GET_POSTS_SUCCESS, GET_POSTS_ACTION } from './constants';
import { capitalize } from '../../../helpers/data.hepler';

export const initialState = {
  posts: [],
  lang: null,
  requesting: true,
};

const convertToCommonpPost = (posts, lang) => {
  const commonPosts = posts.map((post) => {
    const newPost = {
      ...post,
      title: post[`title${capitalize(lang)}`],
      content: post[`content${capitalize(lang)}`],
      excerpt: post[`excerpt${capitalize(lang)}`],
    };
    delete newPost[`title${capitalize(lang)}`];
    delete newPost[`content${capitalize(lang)}`];
    delete newPost[`excerpt${capitalize(lang)}`];
    return newPost;
  });
  return commonPosts;
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POSTS_ACTION:
        draft.lang = action.lang;
        draft.requesting = true;
        break;
      case GET_POSTS_SUCCESS:
        draft.posts = convertToCommonpPost(action.posts, state.lang);
        draft.requesting = false;
        break;
    }
  });

export default homePageReducer;
