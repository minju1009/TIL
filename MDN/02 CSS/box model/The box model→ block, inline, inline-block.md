# The box model→ block, inline, inline-block

[The box model - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#borders)

### The Box model

1. CSS에는 크게 두 가지 종류의 박스들이 있다. block boxes와 inline boxes / 그리고 두 가지 타입이 있는데 inner display type과 outer display type이 있다. inner display type은 flex를 통해서 바꾼다.
2. inline boxes들은 width/height가 적용 안된다. 똑같이 패딩, 마진, 보더는 적용되지만, 위 아래로는 움직이게 만들 수 없다. 그러나 마진을 통해 양 옆으로는 서로를 밀어낼 수 있다. 
3. standard CSS box model is content-box

여기서의 width의 의미는 content 박스 만의 의미! 그런데 이렇게 하면 실제로 우리에게 보여지는 width는 content + padding*2 + border*2가 된다. 그렇기 때문에 실제 넓이를 가늠하기 가 어렵다.

![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled.png)

1. alternative CSS box model

그래서 사용하는게 border-box인데,,! box-sizing 을 border-box로 지정하면, 실제 box의 width 는 content+ padding*2+border*2 가 된다. 

1. 그래서!! 대부분 box-sizing을 border-box로 지정하고 작업을 한다.

![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%201.png)

1. **margin collapsing**

f you have two elements whose margins touch, and both margins are positive, th**ose margins will combine to become one margin, and its size will be equal to the largest individual margin**. If one margin is negative, its value will be *subtracted* from the total. Where both are negative, the margins will collapse and the smallest (furthest from zero) value will be used.

→ 이 경우 위에 있는 애의 margin과 밑에 있는 애의 margin이 서로 닿는다. 그러면 margin이 더 큰 애가 적용된다. 만약 50px, 30px이라면 50px이 적용되기 때문에 밑에 애의 margin이 0이 되도 전체 보기에는 달라지지 않는 것이다.

![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%202.png)

1. box model and inline boxes

1) <p>안에 <span>을 사용했을때. 

→ <span>은 inline block이기 때문에 width/height적용이 안된다. 다만 margin, padding 등으로 가로로 영향을 미치게 할 수는 있다. 이 때문에, 위 아래로는 다른 element (이 경우에는 p)와 겹치게 된다.

![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%203.png)

1. 이 문제를 고치기 위해 span{ display: inline-box}를 해주면, 다음과 같이 다른 element에도 영향을 미치며 밀려날 수 있게 된다. width, height적용이 가능해진다. 그러나 완전히 block box처럼 한 줄을 다 차지하게 되는 것은 아니다. 
    
    ![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%204.png)
    
2. span의 display를 block으로 해주면 아예 새로운 줄로 적용된다. 
    
    ![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%205.png)
    
    **** display : inline-block을 제일 많이 쓰게 되는 때는 navigation bar 등의 안에 <a>를 넣을 때이다. <a>는 inline의 속성을 가지고 있기 때문에, 그냥 패딩을 적용하면 밖의 <div>박스와 겹쳐지게 된다. 이를 고치기 위해 inline-block으로 처리를 해 주면, 위 아래로 영역이 늘어난다. 
    

<before>

![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%206.png)

<after inline-block>

![Untitled](The%20box%20model%E2%86%92%20block,%20inline,%20inline-block%20a91d27d9b9794cbcb190cc18cae34187/Untitled%207.png)