type Pair<T, U> = {
  first: T;
  second: U;
};

const test2: Pair<string, boolean> = {
  first: "김땡땡",
  second: false,
};

// 맥도날드 세트 제네릭 사용해서 정의
// main, sub, drink
// 변수 만들기

// type MacdonaldSet<T, U, V> = {
//   main: T;
//   sub: U;
//   drink: V;
// };

// const myOrder: MacdonaldSet<string, string, string> = {
//   main: "상하이",
//   sub: "감자튀김",
//   drink: "제로콜라",
// };
type macMain = "상하이" | "치즈버거" | "빅맥";
type macSub = "감자튀김" | "치즈스틱" | "코우슬로";
type macDrink = "콜라" | "제로콜라" | "환타";

type MacdonaldSet<T, U, V> = {
  main: T;
  sub: U;
  drink: V;
};

const myOrder: MacdonaldSet<macMain, macSub, macDrink> = {
  main: "빅맥",
  sub: "치즈스틱",
  drink: "환타",
};

// 피자 타입 cheese, topping, crust 포함유무 타입 제너릭으로 설정
type Pizza<T, U> = {
  cheese: T;
  topping: U[];
  crust: boolean;
};

type Cheese = "모짜렐라" | "슈레드" | "앙팡";
type Topping = "불고기" | "피망" | "올리브" | "양파";

const myPizza: Pizza<Cheese, Topping> = {
  cheese: "모짜렐라",
  topping: ["불고기", "양파"],
  crust: false,
};
