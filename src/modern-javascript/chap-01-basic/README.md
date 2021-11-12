### variable은 값을 담기 위한 공간이다.
### var 대신 let을 사용하는 이유
#### *var 는 전역이고 let 은 지역이다.
### const 키워드로 생성된 변수는 상수이므로 그 값을 덮어쓸 수 없다.
### ES6 예약어 (*로 표시된 단어에 새로운 ECMAScript5)
abstract	arguments	boolean	break	byte
case	catch	char	class*	const
continue	debugger	default	delete	do
double	else	enum*	eval	export*
extends*	false	final	finally	float
for	function	goto	if	implements
import*	in	instanceof	int	interface
let	long	native	new	null
package	private	protected	public	return
short	static	super*	switch	synchronized
this	throw	throws	transient	true
try	typeof	var	void	volatile
while	with	yield		

### SWE에서 정의하는 표기법
1. PascalCase : 객체 선언형
2. camleCase : Java, JavaScript 변수 선언형
3. snake_case : Python 변수 선언형
4. kebab-case : Linux CLI

## JavaScript 는 Dynamic Language 이다.(자료형을 정의할 필요가 없다.)
#### Static Language는 Data Type이 고정적이다.
#### Dynamic Language는 Data Type 이 가변적이다.
#### TypeScript는 weak-typed language 이다.


## JavaScript는 총 7개의 type이 존재한다.
#### 1. String
#### 2. number
#### 3. boolean
#### 4. null
#### 5. undefined
#### 6. symbol
#### 7. JSON {}  == Object

## Dot Notation
#### const car = {}
#### car.color = 'red'

## Bracker Notation
#### const car = {
####    color: 'red': ,
#### }


## equality(항등 연산자) : '=='
## Strict equality(완전 항등 연산자) : '==='

## 배열 호출 method
### 1. push : 배열 끝에 새 값을 추가
### 2. unshift : 배열 시작에 새 값을 추가
### 3. pop : 배열의 끝에서  값 하나를 제거
### 4. shift : 배열의 시작에서 값 하나를 제거
