import { holdRaffle } from './holdRaffle';

describe('dado um sorteio de um amigo secreto', () => {
  test('cada participante nao sorteia o proprio nome', () => {
    const participants = [
      'Ana',
      'Jonata',
      'Isabela',
      'Isiane',
      'Davi',
      'Victor'
    ];

    const raffle = holdRaffle(participants)
    participants.forEach(participant => {
      const secretFriend = raffle.get(participant)

      expect(secretFriend).not.toEqual(participant)
    })
  })
})