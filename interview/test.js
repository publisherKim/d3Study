/*
  조합
  +-----+
  | 숫자|
  \n  
  
  k 는 \n을 결정함
  숫자의 자리수 크기에 따른 space 설정여부.
*/
const a = [1,2,3,4,5];
const max = a.length;
const shape = '+-----+';
const lineBreak = '\n';

function solution(a, k) {
  result = '';
  for(let i = 0; i < max; i++) {
    result += shape + lineBreak + `|    ${a[i]}|` + lineBreak + shape + lineBreak;
    // k = 2 라면  i가 2 와 4일때 줄바꿈 추가하기
    if ( (i+1) % k === 0) {
      result += lineBreak;
    }
  }
  return result;  
}

solution(a, 1);

/*
세로쓰기 하고 싶은데 줄바꿈이 있어서안되는구만
 조합 
 +
 |
 +
 -----
  숫자
 -----
*/
let a = [1,2,3,4,5];
let max = a.length;
let shape = `
+
|
+`;

function solution(a, k) {
  let result = `${shape}`;
  let printDataShape = `-----

-----
`;
  for(let i = 0; i < max; i ++){
    result += result + printDataShape;
  }
  return result;
}
solution(a);
/*
  4 < 17 return 3
  because 4 9 16
  범위안의 제곱수 찾기
  각각의 수를 제곱근일 경우 카운트를 추가하고 
  최종적으로 카운트의 수를 반환한다.
*/

function solution(a, b) {
  count = 0;
  for (let i = a; i < b; i++) {
    var judgeInt = Math.sqrt(i);
    if(judgeInt - parseInt(judgeInt) === 0) {
       ++count;
    }
  }
  return count;
}

solution(1, 101);

/*
  self number
  d(91) = 9 + 1 + 91 = 101 제네레이터로 생성되지 않는 수
  범위안의 배열 
  제너레이터의 배열
  두배열의 차로 self number 수집하기
  self number의 합 구하기 
*/

function 수의범위(x) {
  let x범위만큼이루어진수 = [];
  for(let i = 1; i <= x; i++){
      x범위만큼이루어진수.push(i);
  }
  return x범위만큼이루어진수;
}

function 각자리수합(a) {
  let 각자리수와자기자신의합 = [];
  for(let i = 0; i < a.length; i++){
      let sum = a[i], num = a[i];
      while(num > 0) {
          sum += num % 10;
          num = parseInt(num / 10);
      }
      각자리수와자기자신의합.push(sum);      
  }
  return 각자리수와자기자신의합;
}

function 수의범위와각자리수합배열의차집합(a, b) {
  let 임시집합소={}, 자기자신만으로만들어진수 = [];
  for(let i=0; i < a.length; i++) { 
      임시집합소[a[i]]=1 
  };
  for(let i=0; i < b.length; i++) { 
      if(임시집합소[b[i]]) delete 임시집합소[b[i]]; 
  }
  for(let k in 임시집합소) {
      자기자신만으로만들어진수.push(k);
  };
  return 자기자신만으로만들어진수;
}

function 자지신만의숫자로이루어진합(a) {
  let result = 0;
  for(let i = 0; i < a.length; i++){
      result += a[i] * 1;
  }
  console.log(result);
  return result;
}

function 해결책(x) {
  const originData = 수의범위(x);
  const sumData = 각자리수합(originData);
  const selfNumData = 수의범위와각자리수합배열의차집합(originData, sumData);
  return 자지신만의숫자로이루어진합(selfNumData);
}

해결책(10);