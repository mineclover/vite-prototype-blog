import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { components, markdowns } from '@/router/Router';
import { routeMapping, ICategory } from '../utils/mappingUtils';

const postState = markdowns;

export const markdownSlice = createSlice({
  name: 'posts',
  initialState: postState,
  reducers: {},
});

const componentsState = components;

export const componentsSlice = createSlice({
  name: 'components',
  initialState: componentsState,
  reducers: {},
});

interface SubjectObject {
  [key: string]: Subject[];
}

interface Subject {
  index: string;
  path: string;
}

export const selectSubject = (state: RootState) => {
  const result: SubjectObject = {};
  state.posts.forEach((post) => {
    const splitPath = post.path.split('/');
    if (result[post.categores] === undefined) result[post.categores] = [];
    result[post.categores].push({ index: splitPath[1], path: post.path });
  });
  console.log('selectSubject', result);

  return result;
};

// markdown 에다가 components 를 합쳐서 하나의 배열로 만들어서 리턴
export const selectAll = (state: RootState) => {
  const result: ICategory = {};
  state.posts.forEach((post) => {
    routeMapping(result, post.categores, post.subject, post.origin);
  });
  state.components.forEach((post) => {
    routeMapping(result, post.categores, post.subject, post.origin);
  });
  return result;
};

export const componentState = (state: RootState) => state.components;
export const markdownState = (state: RootState) => state.posts;

export const order = ['front', 'back', 'work', 'language', 'blog'];

export const markdownReducer = markdownSlice.reducer;
export const componentsReducer = componentsSlice.reducer;
