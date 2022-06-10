import { useRecoilValue, useSetRecoilState } from "recoil"
import { participatingListState, errorState } from "../atom"

export const useAddingParticipating = () => {
  const setList = useSetRecoilState(participatingListState);

  const list = useRecoilValue(participatingListState);

  const setError = useSetRecoilState(errorState);

  return (participatingName: string) => {
    if (list.includes(participatingName)) {
      setError('Nomes duplicados nao sao permitidos!');
      return
    }
    return setList(currentList => [...currentList, participatingName]);
  }
}