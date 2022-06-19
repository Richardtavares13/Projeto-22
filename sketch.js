var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, imgFada, imgFada2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    imgFada = loadImage("images/fairyImage1.png");
    imgFada2 = loadImage("images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);
   
    keyPressed();
    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130,520);
    fada.addAnimation('fadaVoando',imgFada,imgFada2);
    fada.scale = 0.2;
    vozFada.play();

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg);  
    
    /*if(star.y>470 && starBody.position.y>470){
        Matter.Body.setStatic(starBody,true);
        fada.y = 500;
        fada.x = star.x - 140;
    }*/
    if(star.position.y > 470){
        star.y = 470;
        fada.y = 500;
        fada.x = star.x - 140;
    }

drawSprites();

}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
       fada.x = fada.x -22;
    }
    if(keyCode === RIGHT_ARROW){
        fada.x = fada.x +22;
    }
    if(keyCode === DOWN_ARROW){
        star.velocityY = 10;
    }
}