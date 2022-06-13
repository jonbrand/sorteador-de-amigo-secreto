/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilValue } from "recoil";
import { secretFriendResult } from "../atom";

export const useRaffleResult = () => {
  return useRecoilValue(secretFriendResult);
}