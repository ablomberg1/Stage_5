var drawCar = function(processingInstance) {
     with (processingInstance) {
        var w = 600;
        var h = 200;
        size(w, h); 
        frameRate(30);
        
        // position of the car
        var x = 10; 
        var y = 135;
        var wheelSize = 24;  
        var carfront = 10; 
     
        var draw = function(){
            background(0, 0, 0); 
            //add random stars

        // spaceship
        fill(247, 242, 242);
        noStroke();
        ellipse(180,30,50,20);
        ellipse(180,20,10,10);
        fill(255, 0, 0);
        ellipse(180,20,3,3);
        fill(230, 230, 18);
        triangle(160,35,130,125,145,130);
        triangle(180,35,170,130,190,130);
        triangle(200,35,210,130,235,125);
        fill(0,0,0);
        for (var z=1;z<6; z++) {
            rect(155+(z*5),29+(z*1.25),2,3);
            rect(205+(z*-5),29+(z*1.25),2,3);
        }
            
        // draw the skyline
        stroke(255,255,255);
        fill(140, 140, 140);
        rect(0,30,30,101); //building 1
        rect(30,40,20,91); //building 2
        rect(50,80,20,51);  //building 3
        rect(70,20,20,111);  //building 4
        line(80,10,80,20);
        fill(240, 217, 9);
        stroke(240, 217, 9);
        ellipse(80,10,3,3);

        noFill();
        stroke(0,0,0);

        //buiding 2
        for (var c=1; c<6; c++) {
            fill(0, 0, 0);
            rect(33,45+(c*16),6,3);
            rect(42,38+(c*16),5,3);
        }
        //buiding 1&4
        for (var c=1; c<17; c++) { //rows
            for (var r=1;r<4; r++) { //columns
                rect(r*5,35+(c*6),2,3);
                if (r<3) {
                rect((r*5)+15,35+(c*6),2,3);
            }
                rect(r*5+70,25+(c*6),2,3);
            }
        }


            // draw homes
            stroke(0, 9, 255);
            fill(255, 0, 0);
            rect(180,120,10,10);
            fill(237, 233, 14);
            rect(215,120,10,10);
            fill(255, 94, 0);
            rect(230,120,10,10);
            fill(135, 106, 89);
            triangle(200,120,205,115,210,120);
            triangle(215,120,220,115,225,120);
            triangle(230,120,235,115,240,120);
            // fill(255,255,255);


            

            // draw the road & grass
            fill(0,250,0);
            stroke(0,250,0)
            rect(0,171,w,h);
            fill(150,150,150);
            stroke(0,0,0);
            rect(0,131,w,40);
            for (var i=0; i<w; i=i+40) {
                line(i,150,i+20,150);
            }
            


            // draw the driver
            fill(212, 155, 85);
            ellipse(x + 65, y-15, wheelSize-5, wheelSize-5);
            fill(0,0,0);
            ellipse(x + 71, y-16, wheelSize/10, wheelSize/10);
            

            // draw the car body
            noStroke();
            fill(255, 0, 115);
            rect(x + 15, y*7/10, carfront*5.2, carfront*4,carfront*.7); //top
            rect(x, y-2, carfront*10, carfront*2,carfront*1.5); //bottom
            stroke(255, 0, 0);
            line(x+65,y*7/10,x+90,carfront*13.5);
      

            // draw the wheels
            noStroke();
            fill(77, 66, 66);
            ellipse(x + 25, y+21, wheelSize, wheelSize);
            ellipse(x + 75, y+21, wheelSize, wheelSize);
            fill(255,255,255);
            ellipse(x + 25, y+21, wheelSize/10, wheelSize/10);
            ellipse(x + 75, y+21, wheelSize/10, wheelSize/10);

            // draw truck sign
            stroke(0, 9, 255);
            rect(x+21,y*7.75/10,carfront*3.9, carfront*2,carfront*1.5);
            fill(0, 9, 255);
            text("AB Inc", x+22, y*89/100);

            // if(x)  add ability to blink light at top of highrise
    
            x++;
            if(x>w) {
                x=10;

            
            }

        };
        draw();

           
            
        }};

