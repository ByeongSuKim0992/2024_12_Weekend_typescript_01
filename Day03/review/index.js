const season = prompt("좋아하는 계절");
switch (season) {
  case "봄":
    return "꽃이 핍니다.";
  case "여름":
    return "꽃이 자랍니다.";
  case "가을":
    return "꽃이 저뭅니다.";
  case "겨울":
    return "꽃이 죽습니다.";
  default:
    return "해당 계절은 없습니다.";
}

// 커피메뉴 주문 받고
// 아메리카노 -> 아메리카노 주문 완료!
// 라떼      -> 맛있는 라떼 주문 완료!
// 쿠키      -> 달달한 쿠키 주문 완료!
// 없으면    -> 주문 오류!
const coffee = prompt("커피 메뉴 주문");
switch (coffee) {
  case "아메리카노":
    return "아메리카노 주문 완료!";
  case "라떼":
    return "맛있는 라떼 주문 완료!";
  case "쿠키":
    return "달달한 쿠키 주문 완료!";
  default:
    return "주문 오류!";
}

// If vs Switch
// switch[mandantory[강제성]] -> object type 권장
const color = {
  black: "검은색",
  white: "하얀색",
  green: "초록색",
};

// if[optional[옵셔널]]
if (a == 0) {
  console.log("0임");
}
console.log("나옴");
