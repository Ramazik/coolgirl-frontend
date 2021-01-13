export enum LangGame {
  eng = '🇬🇧',
  rus = '🇷🇺',
  jap = '🇯🇵',
  chi = '🇨🇳',
}

export interface GameObj {
  aka: string | null;
  battery: boolean;
  description: string | null;
  gif: string;
  id: number;
  is_default: boolean;
  language: LangGame;
  mapper: string;
  mp4: string;
  name: string;
  screenshot: string;
  size: number;
  tag: string | null;
  webm: string;
}

export interface ApiGames {
  games: GameObj[];
}
