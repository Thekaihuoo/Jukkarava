
export enum AppTab {
  DAILY = 'DAILY',
  TAROT = 'TAROT',
  THAI = 'THAI',
  ORACLE = 'ORACLE',
  LOTTERY = 'LOTTERY'
}

export interface UserProfile {
  name: string;
  birthDate: string;
}

export interface TarotCard {
  id: string;
  name: string;
  image: string;
  meaning: {
    love: string;
    work: string;
    finance: string;
  };
}

export interface DayInfo {
  name: string;
  shortName: string;
  color: string;
  hex: string;
  forbiddenHex: string;
  forbiddenName: string;
  gemstone: string;
}

export interface LuckData {
  love: number;
  work: number;
  money: number;
  health: number;
}
