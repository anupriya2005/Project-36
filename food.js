class Food {
    constructor(){
        this.foodStock = 0;
        this.lastFed = 0;
        this.image = loadImage("images/Milk.png");
    }

upateFoodStock(foodStock){
    this.foodStock = foodStock;
}

getFedTime(lastFed){
    this.lastFed = lastFed;
}

deductFood(){
if(this.foodStock>0){
this.foodStock = this.foodStock - 1;
}
}

getFoodStock(){
    return this.foodStock;
}

bedroom(){
    background(bedroom, 550, 550);
}

garden(){
    background(garden, 550, 550);
}

washroom(){
    background(washroom, 550, 550);
}

livingRoom(){
    background(livingRoom, 550, 550);
}

display(){
    var x = 80, y = 10;
    imageMode(CENTER)
image(this.image, 720, 220, 70, 70);
if(this.foodStock!== 0){
for(var i = 0; i<this.foodStock; i++){
    if(i%10 == 0){
        x = 80;
        y = y+50;
        }
        image(this.image, x, y, 50, 50);
        x = x+30;
    }
}
if(currentTime==(lastFed+1)){
update("Playing");
foodObjects.garden();
} else if(currentTime==(lastFed+2)){
    update("Sleeping");
    foodObjects.bedroom();
}else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
update("Bathing");
foodObjects.washroom();
} else{
    update("Hungry")
    foodObjects.display();
}
}
}