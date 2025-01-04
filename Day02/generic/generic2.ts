type Job = "전사" | "궁수" | "마법사";
type NewJob = "성기사" | "무법자" | "흑마법사";
type Weapon = "검" | "활" | "지팡이";
type Armor = "갑옷" | "철갑옷" | "천옷";

type GameCharacter<
  T extends Job | NewJob,
  U extends Weapon,
  V extends Armor
> = {
  job: T;
  weapon: U;
  armor: V;
};

const myChar: GameCharacter<NewJob, Weapon, Armor> = {
  job: "무법자",
  weapon: "활",
  armor: "천옷",
};
