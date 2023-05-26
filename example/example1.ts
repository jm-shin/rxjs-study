/**
 * 1. 짝수만 선택
 * 2. 첫 5개만 선택
 * 3. 제곱
 * 4. 한 문자열로 합치기
 */
const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

// 값이 변경될 수 있는 변수를 사용
let count = 0;
let result = '';

for (let i = 0; i < numbers.length - 1 && count < 5; i++) {
    if (numbers[i] % 2 === 0) {
        result += (result === '' ? '' : ', ') + Math.pow(numbers[i], 2);
        count++;
    }
}

/**
 * 함수형으로 짠 코드
 */
console.log(
  numbers
    .filter(n => n % 2 === 0) // 짝수
    .slice(0, 5) // 5개 선택
    .map(n => Math.pow(n, 2)) // 제곱
    .join(', ') // 문자열로 합치기
);
