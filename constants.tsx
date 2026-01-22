
import { DayInfo, TarotCard } from './types';

export const THAI_DAYS: Record<number, DayInfo> = {
  0: { name: 'Sunday (อาทิตย์)', shortName: 'อา.', color: 'Red', hex: '#b91c1c', forbiddenHex: '#1d4ed8', forbiddenName: 'Blue', gemstone: 'Ruby (ทับทิม)' },
  1: { name: 'Monday (จันทร์)', shortName: 'จ.', color: 'Yellow', hex: '#fde047', forbiddenHex: '#b91c1c', forbiddenName: 'Red', gemstone: 'Pearl (มุก)' },
  2: { name: 'Tuesday (อังคาร)', shortName: 'อ.', color: 'Pink', hex: '#ec4899', forbiddenHex: '#ffffff', forbiddenName: 'White', gemstone: 'Coral (ปะการัง)' },
  3: { name: 'Wednesday (พุธ)', shortName: 'พ.', color: 'Green', hex: '#15803d', forbiddenHex: '#ec4899', forbiddenName: 'Pink', gemstone: 'Emerald (มรกต)' },
  4: { name: 'Thursday (พฤหัสบดี)', shortName: 'พฤ.', color: 'Orange', hex: '#ea580c', forbiddenHex: '#7e22ce', forbiddenName: 'Purple', gemstone: 'Yellow Sapphire (บุษราคัม)' },
  5: { name: 'Friday (ศุกร์)', shortName: 'ศ.', color: 'Blue', hex: '#1d4ed8', forbiddenHex: '#000000', forbiddenName: 'Black', gemstone: 'Blue Sapphire (ไพลิน)' },
  6: { name: 'Saturday (เสาร์)', shortName: 'ส.', color: 'Purple', hex: '#7e22ce', forbiddenHex: '#15803d', forbiddenName: 'Green', gemstone: 'Amethyst (พลอยม่วง)' },
};

export const TAROT_DECK: TarotCard[] = [
  {
    id: 'the-sun',
    name: 'The Sun',
    image: 'https://picsum.photos/id/101/300/500',
    meaning: {
      love: 'Happiness and clarity in your relationship.',
      work: 'Success and recognition are coming your way.',
      finance: 'Financial growth and abundance.'
    }
  },
  {
    id: 'the-moon',
    name: 'The Moon',
    image: 'https://picsum.photos/id/102/300/500',
    meaning: {
      love: 'Some hidden feelings or uncertainty may arise.',
      work: 'Trust your intuition more than office rumors.',
      finance: 'Be careful with deceptive investments.'
    }
  },
  {
    id: 'the-star',
    name: 'The Star',
    image: 'https://picsum.photos/id/103/300/500',
    meaning: {
      love: 'Hope and healing after a rough patch.',
      work: 'Creative inspiration is at an all-time high.',
      finance: 'Slow but steady financial recovery.'
    }
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    image: 'https://picsum.photos/id/104/300/500',
    meaning: {
      love: 'New beginnings and a spark of magic.',
      work: 'You have all the tools to succeed.',
      finance: 'Opportunities to manifest money through skills.'
    }
  },
  {
    id: 'the-wheel',
    name: 'Wheel of Fortune',
    image: 'https://picsum.photos/id/105/300/500',
    meaning: {
      love: 'Fate is shifting in your favor.',
      work: 'A turning point or career pivot is likely.',
      finance: 'Ups and downs; manage your risks carefully.'
    }
  }
];

export const THAI_MONTHS = [
  "ธันวาคม", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน"
];

export const THAI_ZODIACS = [
  "ชวด", "ฉลู", "ขาล", "เถาะ", "มะโรง", "มะเส็ง", "มะเมีย", "มะแม", "วอก", "ระกา", "จอ", "กุน"
];
