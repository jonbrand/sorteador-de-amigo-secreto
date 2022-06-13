import { useRecoilValue } from "recoil"
import { participatingListState } from "../atom"

export const useListParticipants = () => {
  return useRecoilValue(participatingListState);
}