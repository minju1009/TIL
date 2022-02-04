# Week 1 - 데이터 타입, 함수, 조건문

### 01_Console.log

console.log(100);  → 출력

“콘솔 찍어봐라~”

원래는 브라우저 안에 콘솔이 담겨 있다. 

### 02-1_Variables1 - 변수 선언과 할당

변수 : 데이터를 담을 수 있는 대상

let myNumber = 100; 

선언 (declare) 과 할당(assign)을 동시에 진행한다.

### 02-2_Variables2 - data types

 데이터 타입은 기본타입(primitive type)과 참조타입(reference type)이 있다.

기본타입 : Number, String, Boolean, Undefined&Null 

참조타입 : Array, Object, function

*Array와  Object의 차이점. 

중괄호로 선언, ‘key:value’의 형태로 선언된다.

### 03_String

 console.log(2 + ‘2);

//22가 출력되는데, 이때 데이터 타입은  string이다.

```jsx
console.log(
"The length of popsi is", 'pepsi'.lenth
)
// The length of pepsi is 5 <- 여기서 5는 '숫자'이다.

console.log(
"The length of popsi is", + 'pepsi'.length
) // The length of popsi is 5 <- 여기서 + 기 연산자로 인해 5는 '문자'이다.
```

### 04-1_Function1 - 함수 선언과 호출

1) input 받기

2) 기능 수행

3) output 반환

> 1)input 받기와 3)output 받기가 없이 2)기능수행만 있어도 함수이다.
> 

기능수행만 있는 함수는 console.log()같은 기능만 있는 함수이다. 

### 04-2_Function2 - return이 있는 함수

1. return 한 값을 console로 보기 가능

```jsx
function sayHello2(){
  let friend = 'Code Kim'
  return 'Return ' + friend
}

console.log(sayHello2());
```

1. return 한 값을 변수에 할당 가능 → 위에서 리턴한 값을 변수에 담아서 콘솔에 찍을 수 있다.

```jsx
let myFriend = sayHello2();
console.log(myFriend);
```

> return : 함수의 output 반환하는 결과물 vs console.log 단순히 화면에 출력
> 

### 04-3_Function3 - input이 있는 함수

function sayHello4 (input) {

... input ...

return output

}

1. parameter > input 자리에 넣어주는 것
2. argument > 함수 호출할때 넘겨주는 애

→ parameter에 argument를 넣어준다.

1. 함수에 input 이 여러개가 들어갈 수 있다.

### 06-1_조건문1 - 조건문과  Boolean

### 06-2_조건문2 - 비교연산자

만약 (조건이) 참이라면 ~

만약 (조건이) 거짓이라면 ~

비교가 이루어진다. 즉, console.log(1+1 === 2)에서, 1+1 이 2와 맞는지 확인한다.

### 06-3_조건문3 - 논리연산자

1) 논리 연산자 or : 1 + 1 === 2 || 1+ 2 === 4 : 둘 중에 하나만 참이어도

2) 논리 연산자 and : 1 + 1 === 2 && 1 + 1 === 3 : 둘 다 참이어야만

3) Truthy / Falsy 

```jsx
let a = 0 //falsy
let b = 100 // truthy

if(a) {
	console.log('i am falsy')
} else if (b) {
	console.log('i am truthy')
}
```

Falsy 의 종류들

```
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

Truthy : falsy를 제외한 나머지 값들

```
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

# Week 2 - 반복문과 배열
## 07_배열

1. 특정한 요소들을 일렬로 모아놓은 것
    
    let myArray = [19, 44, ‘good’, false] ← 안에 있는 하나하나를 요소, element라고 부름
    
2. 배열 안에는 어떤 요소의 데이터 타입이든 다 들어갈 수 있다.
3. 배열에는 ‘순서'가 있고, 0 1 2 3 순서로 ‘0’번 index부터 있다.
4. **요소에 접근하기** → 다른 변수에 사용할 수 있도록 할당 한다던지, 콘솔에 찍는다든지 하는 것!
    
    myArray[0], myArray[3]
    
5. **요소를 수정하기** 
    
    ```jsx
    let myArray = [19, 44, 'good', false]
    
    myArray[0] = 500 // 19가 500으로 바뀜
    ```
    
6. **배열 길이 구하기**
    
    ```jsx
    console.log(myArray.length) // *가장 마지막 인덱스 값은 배열 길이 - 1 까지이다*
    ```
    
7. **요소 추가하기** 
    
    ```jsx
    const fruits = ["Banana", "Orange", "Apple"]
    fruits.push('Kiwi');
    ```
    
8. **요소 삭제하기**
    
    ```jsx
    myArray.pop()
    ```
    
    method 종류가 참 ~ 많다.
    
    - pop - Removes from the End of an Array
    - shift - Removes from the beginning of an Array
    - splice - removes from a specific Array index
    - filter - allows you to programatically remove elements from an Array
9.  **Array 안에 또다른 Array를 넣을 수 있다. ‘Nested Array’, ‘중첩된 배열'이라고 한다.**
    
    ```jsx
    let myArray = [19, 33, 'good', [100, 2000, 500], false]
    console.log(myArray[3][0]) // 100을 출력해줌
    ```
    
10. 배열의 길이와, 배열의 인덱스를 이용하여, 배열의 가장 마지막 요소에 접근하는 법!
    
    ```jsx
    let myArray1 = [19, 33, 'good', [100, 2000, 500], false]
    let myArray2 = [900, 800, 700, 500]
    let myArray3 = [7, 77, 777, 7777, 77777, 777777]
    
    console.log('myArra1: ', myArray1[4])
    console.log('myArra1: ', myArray2[3])
    console.log('myArra1: ', myArray3[5])
    
    console.log(myArray1[myArray1.length - 1])
    ```
    

## 08-1 반복문1 - 반복문 기초

 1. 반복문은 동일한 동작을 반복해서 수행해야 하는 수고로움을 덜어주기 위해서 존재함.

1. 동일한 동작을 ‘조건을 만족할 때 까지' 반복해서 수행하도록 한다.
2. 자바스크립트가 ‘10’번 출력했다는 것을 어떻게 알 수 있지?  → 바로 ‘counter’를 활용하면 된다.
3. 반복문 “for”을 사용한다.
    
    ```jsx
    for (카운터의 초기 상태; 카운터가 만족시켜야 할 조건; counter 변화){
    	수행할 동작
    } 
    ```
    
    ```jsx
    for (let step = 0; step <10; step++){
    	console.log('Hello wecode')
    } 
    
    // 여기서 counter는 step! 
    ```
    

## 08-2 반복문2 - 반복문과 배열

1. 1부터 10까지 콘솔에 출력해보기!
    
    ```jsx
    for (let i = 1;  < 11; i++){
    	console.log(i)
    }
    
    // i가 시작되도록 하는 값은 우리가 정해주면 된다.
    ```
    

1. **For loop & array 반복문과 배열은 굉장히 자주 함께 사용된다!**
    
    문제 : 빈 배열 myArray에 100부터 110까지 요소를 추가하기
    

```jsx
let myArray = [];

for (i = 0; i < 11; i++) {
  myArray.push(100 + i);
}

console.log(myArray);
```

## 08-3_반복문3 - 반복문과 배열 심화

1. Array의 요소를 순회하며 콘솔에 출력하기
    
    ```jsx
    let colors = ['red', 'blue', 'orange', 'black']
    
    for (i = 0; i < colors.length; i ++ ){
      console.log(colors[i])
    }
    ```
    

 2. Number로 이루어진  Array의 요소를 순회하며 1씩 더하여 콘솔에 출력하기

```jsx
let myNumbers= [1, 2, 3, 4, 5, 6, 7];

for(i=0; i<myNumbers.length; i++){
  console.log(myNumbers[i]+1)
}
```

—> 위의  for문들을 length로 사용하여, 배열의 길이가 길어지더라도 똑같은 for문을 사용해서 원하는 것을 얻을 수 있다.

