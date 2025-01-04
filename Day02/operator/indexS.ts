type StudentMathScore = { [name: string]: number };

const classOne: StudentMathScore = {
  kim: 50,
  lee: 60,
  park: 55,
};

// 영어점수
type StudentEngScore = { [name: string]: number };

const classTwo: StudentEngScore = {
  kim: 45,
  lee: 50,
  park: 30,
};

// 국어 점수, 등급도 갖는 배열 형태의 오브젝트로 만들기
type Grade = "A" | "B" | "C" | "D" | "F";

// 부분집합의 개념으로 넣기
type StudentKorScore = { [name: string]: number | Grade } & { grade: Grade };
const classThree: StudentKorScore[] = [
  { kim: 30, grade: "F" },
  { lee: 50, grade: "D" },
];

// Dictionary 타입을 만들고
type Dictionary = { [key: string]: string };
const eng: Dictionary = {
  apple: "사과",
  orange: "오렌지",
  kiwi: "키위",
};
