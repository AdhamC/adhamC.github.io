var bg;
var mainCircleSalaryX = 553;
var mainCircleSalaryY = 110;
var mainCircleSalaryRad = 20;
var breadCircleX = 580;
var breadCircleY = 610;
var gasCircleX = 1140;
var gasCircleY = 440;
var meatCircleX = 327;
var meatCircleY = 410;
var triggereds = [false,false,false,false];

function setup(){
    createCanvas(1200, 900);
    bg = loadImage('assets/bread.jpg');
    background(bg);

}

function draw(){
    background(bg);
    textSize(24);
    fill(255);
    // text("mouseX: "+round(mouseX),10,30);
    // text("mouseY: "+round(mouseY),10,50);

    if (dist(mouseX,mouseY,mainCircleSalaryX,mainCircleSalaryY)<= mainCircleSalaryRad){
        textAlign(CENTER);
        fill(255);
        stroke(0);
        text("The average salary of a worker is about 35,000 Liras a month, about $40", mainCircleSalaryX,mainCircleSalaryY);
        triggereds[0] = true;
    } else {
        noStroke();
        fill(255,0,0);
        circle(mainCircleSalaryX,mainCircleSalaryY,mainCircleSalaryRad);
    }
    if(dist(mouseX,mouseY,breadCircleX,breadCircleY)<mainCircleSalaryRad){
        textAlign(CENTER);
        fill(255);
        stroke(0);
        text("bread requires around a 3 hour wait in line to get, and costs a 150 Liras. Relatively affordable.", breadCircleX, breadCircleY);
        triggereds[1] = true;
    } else {
        noStroke();
        fill(255,0,0);
        circle(breadCircleX,breadCircleY,mainCircleSalaryRad);
    }
    if(dist(mouseX,mouseY,gasCircleX,gasCircleY)<mainCircleSalaryRad){
        textAlign(RIGHT);
        fill(255);
        stroke(0);
        text("A gas cylinder is about 8000 Liras. Requires replacement just under once a month", gasCircleX, gasCircleY);
        triggereds[2] = true;
    } else {
        noStroke();
        fill(255,0,0);
        circle(gasCircleX,gasCircleY,mainCircleSalaryRad);
    }
    if(dist(mouseX,mouseY,meatCircleX,meatCircleY)<mainCircleSalaryRad){
        textAlign(LEFT);
        fill(255);
        stroke(0);
        text("A kilogram of beef is about 7000 Liras.", meatCircleX, meatCircleY);
        triggereds[3] = true;
    } else {
        noStroke();
        fill(255,0,0);
        circle(meatCircleX,meatCircleY,mainCircleSalaryRad);
    }
    if (triggereds[0] && triggereds[1] && triggereds[2] && triggereds[3]){
        background(0);
        textAlign(CENTER);
        textSize(36);
        fill(255);
        text("The average government worker's salary is just enough for 5 Kgs of meat", width/2,height/2);
    }
}

function keyPressed(){

}
