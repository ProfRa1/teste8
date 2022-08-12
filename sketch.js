///////////// Nome do Jogo
var life = 3

  function preload(){
    naveImg = loadImage ("assets/nave.png")
    alienMImg = loadImage ("assets/alienM.png")
    alienPImg = loadImage ("assets/alienP.png")
    fundoImg = loadImage ("assets/fundo.jpg")
    meteoroImg= loadImage ("assets/meteoro.png")
    chefaoImg = loadImage ("assets/chefao.png")
    tiroImg = loadImage ("assets/shot.png")
    coracaoImg3 = loadImage ("assets/coracao3.png")
    coracaoImg2 = loadImage ("assets/coracao2.png")
    coracaoImg1 = loadImage ("assets/coracao1.png")
  }


  function setup() {

    createCanvas (500,700);

    coracao3 = createSprite(60,30);
    coracao3.addImage(coracaoImg3);
    coracao3.scale = 0.30 ;

    coracao2 = createSprite(43,30);
    coracao2.addImage(coracaoImg2);
    coracao2.scale = 0.30;

    coracao1 = createSprite(27,30);
    coracao1.addImage(coracaoImg1);
    coracao1.scale = 0.30;
  
    nave = createSprite (250,600)
    nave.addImage(naveImg)
    nave.scale = 0.25
    
   
    nave.setCollider('circle',0,0,140)
   
    aliens = new Group()
    aliensM = new Group()
    aliensM2 = new Group()
    tiros = new Group()
    meteoros = new Group()
   
    
  }

  function draw() {

    image (fundoImg,0,0,500,700);
    textSize(35)
    fill("yellow")
    textFont("Magneto")
    text("StarGame",155,40)
        console.log(life)
    spawnaliens()
    spawnaliensM1()
    spawnaliensM2() 

    
    nave.x = World.mouseX
    nave.y = World.mouseY
      
    if (aliens.collide(tiros)){
    aliens.destroyEach()
    }
      
    if (nave.bounceOff(meteoros)){
    nave.x = 250
    nave.y = 600
    life = life -1
    }


    if (nave.bounceOff(aliens)){
      nave.x = 250;
      nave.y = 600;
      life = life-1;
    }
  
   if (nave.bounceOff(meteoros)){
      nave.x = 250;
      nave.y = 600;
      life = life-1;
    }

    if(life<=0){
    nave.remove()
    tiros.destroyEach()
    }
   
    if(life ===3){
     coracao3.visible = true
  
    }
    else{
    coracao3.visible = false
    life = 2
    }
    
 
    // alíens sumindo
    if (aliensM.collide(tiros)){
      aliensM.destroyEach();
    }
    // alíens sumindo
    if (aliensM2.collide(tiros)){
 
      aliensM2.destroyEach();

    }
  
    if (keyWentDown('space')){
      tiro = createSprite (250,600,5,10)
      tiro.addImage (tiroImg)
      tiro.scale = 0.15
      tiro.lifetime = 70
      tiro.velocityY = -10
      tiro.x = nave.x + 2
      tiro.y = nave.y
      tiros.add(tiro)

    }

    spawnmeteoro()
    drawSprites();

  }

 // criação de naves

  function spawnaliens(){
    if(frameCount%90 === 0){
      var alienP = createSprite(0,130,20,20)
      alienP.velocityX = 6
      alienP.addImage (alienPImg)
      alienP.scale = 0.095
      alienP.lifetime = 500
      aliens.add(alienP)
    }
  }

 // criação de naves 

  function spawnaliensM1(){
    if(frameCount%90 === 0){
      var alienM = createSprite(50,0,20,20)
      alienM.velocityY = 6
      alienM.addImage (alienMImg)
      alienM.scale = 0.35
      alienM.lifetime = 500
      aliensM.add(alienM)
    }
  }

 // criação de naves 

  function spawnaliensM2(){
    if(frameCount%90 === 0){
      var alienM2 = createSprite(470,0,20,20)
      alienM2.velocityY = 6
      alienM2.addImage (alienMImg)
      alienM2.scale = 0.35
      alienM2.lifetime = 500
      aliensM2.add(alienM2)
    }
  }

 // criação de meteoros

  function spawnmeteoro(){
    if(frameCount%240 === 0){
      var meteoro = createSprite(500,0,20,20)
      meteoro.x=Math.round(random(0,500))
      meteoro.velocityX = -6
      meteoro.velocityY = 13
      meteoro.addImage (meteoroImg)
      meteoro.scale = 0.7
      meteoros.add(meteoro)
      meteoro.lifetime = 100
    }
  }

 /////////////// Fim
