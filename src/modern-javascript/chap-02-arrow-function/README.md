## ES5 함수 
#### const oldFunction = funtion(name) {
####    return "hello" + name;
#### }

## ES6 함수
#### const arrowFunction = (name) => {
####    return `hello ${name}`;
#### }

## 화살표 함수에서 this 사용시 주의해야 하는 경우
#### window 객체를 가리킬 때
#### StrictMode 모드를 이용하여 방지 가능