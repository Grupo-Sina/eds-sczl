export interface Team {
  name: string;
  amountVotes: number;
}

export const getTopTeams = (votesArray: Team[], topCount: number): Team[] => {
  const consolidatedVotes: Record<string, number> = {};

  votesArray.forEach((team) => {
    const teamName = team.name.toLowerCase();
    consolidatedVotes[teamName] =
      (consolidatedVotes[teamName] || 0) + team.amountVotes;
  });

  const consolidatedArray: Team[] = Object.keys(consolidatedVotes).map(
    (name) => ({
      name,
      amountVotes: consolidatedVotes[name],
    })
  );

  const sortedArray: Team[] = consolidatedArray.sort(
    (a, b) => b.amountVotes - a.amountVotes
  );

  const topTeams: Team[] = sortedArray.slice(0, topCount);

  return topTeams;
};
