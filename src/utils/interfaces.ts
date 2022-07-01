export interface AboutDataInterface {
  title: string;
  text: string;
  image: string;
}

export interface MovesInterface {
  moveId: number;
  title: string;
  image: string;
  description: string;
  youtubeUrl: string;
}

export interface FightDataInterface {
  title: string;
  date: string;
  rounds: number;
  finish: string;
  description: string;
  image: string;
}
