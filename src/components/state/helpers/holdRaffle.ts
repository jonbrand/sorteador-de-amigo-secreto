import shuffle from "just-shuffle";

export function holdRaffle (participants: string[]) {
  const totalParticipants = participants.length;

    const shuffled = shuffle(participants);

    const result = new Map<string, string>();

    for (let index = 0; index < totalParticipants; index++) {
      const participantIndex = index === (totalParticipants - 1) ? 0 : index + 1;

      result.set(shuffled[index], shuffled[participantIndex])
    }

  return result
}