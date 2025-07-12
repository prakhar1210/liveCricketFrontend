export type Commentary = {
  over: number;
  ball: number;
  event: string;
  description: string;
};

export type Match = {
     _id?: string; 
  matchId: number;
  teams: string[];
  venue: string;
  commentary: Commentary[];
};
