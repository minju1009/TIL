# basic and selectors

1. Combining selectors and combinators

→ +는 바로 뒤에 오는 걸 의미함

```html
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }
```

```html
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

### 2. Functions

대부분의 value들은 심플키워드나 숫자이지만, 함수가 value로 쓰이는 경우도 있다.

1. **calc()**

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

1. **transform**

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

### 3. CSS 작동 방식

![Untitled](basic%20and%20selectors%201d146a9c65e6461ea0c8269daff7162f/Untitled.png)

### 4. Inheritance and Specificity

when two css values conflict...!

1) Specificity : 더 구체적으로 작성한 CSS rule이 적용된다.

2) Inheritancs : child node 가 parent node의 CSS rule을 적용받는데, 더 직접적인 parent node의 rule을 적용받는다. 

3) Controlling inheritance

- **inherit : “turns on inheritance”**
    
     ex) color : inherit
    
- **initial : “to its default value”**
- **unset : “resets the property to its natural value” 만약 원래 inherit이 적용되는 애면 그대로 inherit / 워래 적용 안되는 애면 그대로 initial로**
- **revert :** “**to the browser’s default styling”**
- all : unset으로 해서 부모 node안에 있는 children node를 전부 reset할 수 있다.

### 5. Types of selectors

1. Attribute selectors : select elements based on the presence of a certain attribute on an element
    
    ex)) a[title]{} / a[href=”//example.com”}
    
2. Pseudo-classes : styles certain states of an element.
    
    ex)) a:hover{ }
    
3. Pseudo-elements : select a certain part of an element rather than the element itself.
    
    ex)) p::first-line{ }  ⇒ always selects the first line of text inside an element.
    
4. Combinators 
    
    ex) article > p { } ⇒ selects paragraphs that are direct children of <article>