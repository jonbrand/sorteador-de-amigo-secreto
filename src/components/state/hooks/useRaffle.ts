import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { holdRaffle } from "../helpers/holdRaffle";
import { useListParticipants } from "./useListParticipants"

export const useRaffle = () => {
  const participants = useListParticipants();

  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = holdRaffle(participants);
    setResult(result);
  }
}