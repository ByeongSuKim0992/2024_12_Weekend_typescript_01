// 캐릭터 타입 만들기
// 기본으로 모든 캐릭터는 이름과 레벨 갖는다.
type Character = {
  name: string;
  level: number;
};
// 전사 캐릭터 타입: 힘과 사용하는 무기
type Warrior = {
  strength: number;
  weapon: string[];
};
// 마법사 캐릭터 타입: 마나와 사용하는 주문
type Magician = {
  mana: number;
  skills: string[];
};
// 궁수 캐릭터 타입: 민첩도와 사용하는 은신
type Thief = {
  Agility: number;
  Stealth: string[];
};
// 궁수 캐릭터 타입: 정확도와 사용하는 활
type Archer = {
  acurrancy: number;
  bows: string[];
};

const myChar: Character & Warrior = {
  name: "지존전사",
  level: 23,
  strength: 120,
  weapon: ["도끼", "창"],
};

const yourChar: Character & Archer = {
  name: "뿌띠궁수",
  level: 15,
  acurrancy: 30,
  bows: ["은화살", "빙수화살"],
};
