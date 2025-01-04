const transformCase = (sentence: string, form: "upper" | "lower") => {
  return form == "upper" ? sentence.toUpperCase() : sentence.toLowerCase();
};

type DateKor =
  | "월요일"
  | "화요일"
  | "수요일"
  | "목요일"
  | "금요일"
  | "토요일"
  | "일요일";
type ErrorKor = "에러";

const getDayName = (num: 1 | 2 | 3 | 4 | 5 | 6 | 7): DateKor | ErrorKor => {
  switch (num) {
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
    case 7:
      return "일요일";
    default:
      return "에러";
  }
};

const getBirthYear = (age: number) => new Date().getFullYear() - age;

const getDiscountedPrice = (price: number) => {
  if (price >= 500000) return price * 0.8;
  else if (price >= 300000) return price * 0.9;
  else if (price >= 100000) return price * 0.95;
  else return price;
};

const getAngle = (angle: number): 1 | 2 | 3 | 4 | "에러" => {
  if (0 < angle && angle < 90) return 1;
  else if (angle == 90) return 2;
  else if (90 < angle && angle < 180) return 3;
  else if (angle == 0 || angle == 180) return 4;
  else return "에러";
};
