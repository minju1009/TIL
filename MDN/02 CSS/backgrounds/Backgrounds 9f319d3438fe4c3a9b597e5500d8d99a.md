# Backgrounds

[Backgrounds and borders - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

## Styling backgrounds in CSS

1. **Background images**

default : box보다 큰 image를 적용하면 box에 맞춰서 작아지지 않고, box보다 작은 image를 적용하면 반복되는 타일로 배경을 채우게 된다.

![Untitled](Backgrounds%209f319d3438fe4c3a9b597e5500d8d99a/Untitled.png)

1. **Controlling background-repeat**
- `no-repeat` — stop the background from repeating altogether.
- `repeat-x` — repeat horizontally.
- `repeat-y` — repeat vertically.
- `repeat` — the default; repeat in both directions.

1. **Sizing the background image**

3가지 방법이 있다. → background-size: length or percentage / contain / cover

1) contain : 박스 안에 들어맞게 하는 것이다. 박스랑 이미지랑 이미지 비율이 다르면 빈 공간이 생길 수 있다. 그래도 이미지가 잘리지 않고 전부 들어간다.

![Untitled](Backgrounds%209f319d3438fe4c3a9b597e5500d8d99a/Untitled%201.png)

2) cover : 박스가 꽉 차도록 하는 것이다. 꽉 채우기 위해서 두 변 중 짧은 쪽을 기준으로 박스를 채우게 되며, 그렇게 일부 이미지가 잘릴 수도 있다. 일반적으로는 배경을 채울 때는 cover를 많이 사용한다.

1. **Positioning the background image**

1) background-position : top center ; 

2) background-position : 20px 10%; // 왼쪽으로부터 20px, 위로부터 10%

3) background-position : 20px top; // 왼쪽으로부터 20px, 맨 윗줄

4) background-positon : top 20px right 10px; // 위에서부터 20px, 오른쪽에서 10px 이동한 곳에 위치함.

등과 같이 좌표를 통해 이동시킨다.

 

1. **Gradient backgrounds**

→ background image의 속성이 그대로 적용된다. 사이즈도 background-size로 조절하면 되며, 아래 사이트를 이용하면 손쉽게 좌표를 구할 수 있다. 

[https://cssgradient.io/](https://cssgradient.io/)

1. **Multiple background images**

background-image: url(image1.png), url(image2.png)와 같이 여러 개의 이미지를 백그라운드로 지정할 수 있다.

이 경우, 먼저 작성한 애가 제일 위로 올라오며 나머지가 그 밑으로 겹쳐지게 된다.

![Untitled](Backgrounds%209f319d3438fe4c3a9b597e5500d8d99a/Untitled%202.png)

1. **Background attachment**

[https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)

---