import { useListParticipants } from "../state/hooks/useListParticipants";

export const ListParticipants = () => {
  const participants: string[] = useListParticipants();

  return (
    <ul>
      {participants.map(participant => <li key={participant}>{participant}</li>)}
    </ul>
  )
}