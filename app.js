const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
//기본적인 붓(브러쉬)이다. 두가지 옵션이 있고 2d말고는 다 3d를 위한것이다.
//컨버스에 그림을 그릴때 사용하는것 그것이 context이다.
canvas.width = 800;
canvas.height = 800;

//ctx.fillRect();
//fillRect(0)라는 함수는 canvas안에 그림을 채우는 함수이고 이 함수는 4개의 인자를 갖는다. x:number,y:number,W:,H:
//x축과 y축의 위치를 정할 숫자와 가로세로 값 fillRect는 단축함수이다.
//기본함수는 Rect(0,0,0,0) 그린다는 함수이고 이것을 설정하면 stroke/fill 로 채워야한다.
//stroke는 선만있는것 fill은 색을 채우는 것. 두개중 아무것도 설정해주지않는다면 우리가 그린 Rect는 브라우저에 나타나지 않는다.

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
