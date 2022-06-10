import { atom } from "recoil";

export const participatingListState = atom<string[]>({
  key: 'participatingListState',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
});