// 정규표현식 (Regular Expression) : 특정 패턴을 정의해 문자열을 검색, 대체, 추출하는 데 사용
// 정규 표현식 생성 방법 : 리터럴 방식, RegExp 객체 사용 방식

const regex = /World/; // 대부분의 경우에 이 리터럴 방식을 많이 사용함
// const regex = new RegExp("World");
let inputStr = "Hello World~~~~";
console.log(regex.test(inputStr)); // test(): 해당 문자열이 포함되어 있으면 true, 없으면 false 반환

const regex2 = /가장/;
// exec() : 문자열에서 패턴에 일치하는 첫번째 결과를 반환
console.log(regex2.exec("가장 큰 실수는 포기입니다."));

const inputText = "010-1234-1231asdgdawdsawd010-5678-5678";
const regNumber = inputText.match(/\d{3}-\d{4}-\d{4}/g);
console.log(regNumber);

const regex3 = /놀기/;
console.log(regex3.exec("가장 큰 실수는 포기입니다."));
