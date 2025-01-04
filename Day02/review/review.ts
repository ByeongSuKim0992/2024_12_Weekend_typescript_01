// 타입스크립트 시작하기
// 1. npm install -g typescript 설치
// 2. npx tsc --init 이 폴더에 타입스크립트 시작
// 3. tsc ~~.ts 타입스크립트를 자바스크립트로 바꾸기 작업

// 오노테이션
const myCoffee: string = "";
const menu: string[] = ["아메리카노", "라떼"];
const add = (x: number, y: number): number => x + y;

type Android = { version: number; function: string[] };
const android14: Android = {
  version: 14,
  function: ["지문인식", "얼굴인식", "통화"],
};

type Gender = "남성" | "여성";

// 유니언 타입: | (or)
// 인터섹션 타입: & (and)
