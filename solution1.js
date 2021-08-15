function solution(input) {
  const output = {
    ㄱ: 0,
    ㄴ: 0,
    ㄷ: 0,
    ㄹ: 0,
    ㅁ: 0,
    ㅂ: 0,
    ㅅ: 0,
    ㅇ: 0,
    ㅈ: 0,
    ㅊ: 0,
    ㅋ: 0,
    ㅌ: 0,
    ㅍ: 0,
    ㅎ: 0,
  };

  const oneLetterArr = input.split("");

  oneLetterArr.forEach((oneLetter) => {
    output[getChosung(oneLetter)]++;
  });

  console.log(output);
  return output;
}

function getChosung(oneLetter) {
  const chosung = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  const korUniCodeValue = 44032;
  let korUniCode = oneLetter.charCodeAt(0);

  korUniCode = korUniCode - korUniCodeValue;

  let chosungIndex = parseInt(korUniCode / 588);

  return chosung[chosungIndex];
}

const input = "사과1호랑이,고니 수박BT닭";

solution(input);
