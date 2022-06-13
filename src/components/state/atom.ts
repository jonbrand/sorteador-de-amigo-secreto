import { atom } from "recoil";

export const participatingListState = atom<string[]>({
  key: 'participatingListState',
  default: [],
});

export const secretFriendResult = atom<Map<string, string>>({
  key: 'secretFriendResult',
  default: new Map(),
});

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
});