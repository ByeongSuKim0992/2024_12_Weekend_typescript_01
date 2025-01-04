type Person = { anme: string; age: number };
type Test = keyof Person;
const test: Test = "age";

// 커피 타입 이름, 샷수, 성분
// 키오브를 사용해서 test1에서 샷수를 변수로 덤는 코드

type Coffee = { name: string; shots: number; ingredents: string[] };
type KeyCoffee = keyof Coffee;
const test1: KeyCoffee = "shots";

type Student = { name: string; age: number };
type StudentKey = keyof Student;

const getStudentProperty = (student: Student, key: StudentKey) => {
  return student[key];
};
const kim: Student = { name: "김민재", age: 28 };
getStudentProperty(kim, "age"); //28

// Colors 타입을 만들고 primary, secondary, success, danger
// 키오브로 키값들을 추출하고
// 만약에 키값들로 이름을 주었을 때, 해당 색상들을 돌려주는 함수를 만들면 됨
// ex getColor("Primary") => green
// ex getColor("danger") => red
type Colors = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
};

const color: Colors = {
  primary: "skyblue",
  secondary: "pink",
  danger: "red",
  success: "green",
};

type ColorsKey = keyof Colors;

const getColor = (colorkey: ColorsKey) => {
  return color[colorkey];
};

getColor("secondary"); // pink

// backgroundColor => first, second, deactived, hover
// getBgColor => 원하는 헥사코드 나오도록 설정
type backgroundColor = {
  first: string;
  second: string;
  deactived: string;
  hover: string;
};

const bgColor: backgroundColor = {
  first: "green",
  second: "blue",
  deactived: "grey",
  hover: "skyblue",
};

type BgColorKey = keyof backgroundColor;
const getBgColor = (bgkey: BgColorKey) => bgColor[bgkey];

getBgColor("deactived"); // grey
