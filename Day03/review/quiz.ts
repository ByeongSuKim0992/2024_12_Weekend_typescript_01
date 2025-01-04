type Oper = "add" | "minus" | "multi" | "divide";

// const calculate = (oper: Oper | null, x: number, y: number) => {
//   if (oper == "add") return x + y;
//   else if (oper == "minus") return x - y;
//   else if (oper == "multi") return x * y;
//   else if (oper == "divide") {
//     // if (y != 0) return x / y;
//     // else return "에러";
//     // return y != 0 ? x / y : "에러";
//     return y == 0 ? "에러" : x / y;
//   } else {
//     return "에러";
//   }
// };

const calculate = (oper: Oper | null, x: number, y: number) => {
  switch (oper) {
    case "add":
      return x + y;
    case "minus":
      return x - y;
    case "multi":
      return x * y;
    case "divide":
      return y == 0 ? "에러" : x / y;
    default:
      return "에러";
  }
};
