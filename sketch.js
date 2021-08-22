var emoji1,emoji1image,emoji2,emoji2image


function preload(){
    emoji1image=loadImage("ghost.png")
    emoji2image=loadImage("emoji2.png")
}

function setup(){

createCanvas(1530,750)
emoji1=createSprite(width/2,height/2,80,80)
emoji1.addImage(emoji1image)
emoji1.scale=4
}

function draw(){
background("green")


drawSprites()

fill("red")
textSize(50)
stroke("black")
textFont("Algerian")
text("august fool" ,width/3,height/1.3)


if(frameCount%10===0){
emoji2=createSprite()
emoji2.x=Math.round(random(width/1,width/20))
emoji2.velocityY=5
emoji2.width=20
emoji2.height=20
emoji2.addImage(emoji1image)
emoji2.scale=0.3
}
}
