var drawCar = function(processingInstance) {
     with (processingInstance) {
        var w = 600;
        var h = 200;
        size(w, h); 
        frameRate(30);
        
        /// car in motion
        var x = 10; 
        var y = 150;
        var wheelSize = 24;  
        var carfront = 10;
        
        //w and h of screen
        var w = 600;
        var h = 200;
        
        //rest of the city
        var v = 10;
        var wl = 2;  //ss window length
        var wh = 3;  //ss window height
        var sx = 180; //spaceship x coordinate
        var sy = 35; //spaceship y coordinate
           
        
        var draw = function(){
            background(0, 0, 0); 
            
            // spaceship
            fill(247, 242, 242);
            noStroke();
            ellipse(sx,sy-5,sy+15,sy-15);
            ellipse(sx,v*2,v,v);
            fill(255, 0, 0);
            ellipse(sx,v*2,v*0.3,v*0.3);
            fill(230, 230, 18);
            triangle(sx-20,sy,sx-50,sx-55,sx-35,sx-50);
            triangle(sx,sy,sx-10,sx-50,sx+10,sx-50);
            triangle(sx+20,sy,sx+30,sx-50,sx+55,sx-55);
            fill(0,0,0);
            for (var z=1;z<6; z++) {
                rect(155+(z*5),29+(z*1.25),wl,wh);
                rect(205+(z*-5),29+(z*1.25),wl,wh
                );
            }
            
            //buildings
            var bw = 20;
            var bh = 130;    
            
            // draw the skyline
            stroke(255,255,255);
            fill(140, 140, 140);
            rect(bw-20,bh-100,bw+10,bh-29); //building 1
            rect(bw+10,bh-90,bw,bh-39); //building 2
            rect(bw+30,bh-50,bw,bh-79);  //building 3
            rect(bw+50,bh-110,bw,bh-19);  //building 4
            line(bw+60,bh-120,bw*4,bh-110);
            
            fill(240, 217, 9);
            stroke(240, 217, 9);
            ellipse(bw+60,bh-120,v*0.3,v*0.3);

            noFill();
            stroke(0,0,0);

            //buiding 2
            for (var c=1; c<6; c++) {
                fill(0, 0, 0);
                rect(bw+13,45+(c*16),wl*3,wh);
                rect(bw*2.2,38+(c*16),wl*2.5,wh);
            }
            //buiding 1&4
            for (var c=1; c<17; c++) { //rows
                for (var r=1;r<4; r++) { //columns
                    rect(r*5,35+(c*6),wl,wh);
                    if (r<3) {
                    rect((r*5)+15,35+(c*6),wl,wh);
                }
                    rect(r*5+70,25+(c*6),wl,wh);
                }
            }

            var homex = 200;
            var homey = 100;
            var homesize = 30;
            
            // draw homes
            stroke(0, 9, 255);
            fill(255, 0, 0);
            rect(homex,homey,homesize,homesize); //home 1
            fill(237, 233, 14);
            rect(homex+35,homey,homesize,homesize); //home 2
            fill(255, 94, 0);
            rect(homex+70,homey,homesize,homesize);  //home 3
            fill(135, 106, 89);
            triangle(homex,homey,homex+15,homey-15,homex+30,homey); //home 1
            triangle(homex+35,homey,homex+50,homey-15,homex+65,homey);  //home 2
            triangle(homex+70,homey,homex+85,homey-15,homex+100,homey);  //home 3


       
                fill(0,0,0);
            for (var ww = 1; ww<20; ww=ww+3.5) {
                for (var d = 0; d<3;d++){
            rect(homex+(ww*5), homey+5, wl*2, wh*2); //house windows
            rect(homex+12+(d*36),homey+20,wl*2.5,wh*4); //house doors
            }}

            // draw the road & grass
            fill(0,250,0);
            stroke(0,250,0)
            rect(0,171,w,h);
            fill(150,150,150);
            stroke(0,0,0);
            rect(0,151,w,40);
        for (var i=0; i<w; i=i+40) {
            line(i,170,i+20,170);
        }
            fill(0,250,0);
            stroke(0,0,0);
            rect(0,191,w,h);
            rect(0,131,w,20);
            


            // draw the driver
            fill(212, 155, 85);
            ellipse(x + 65, y-15, wheelSize-5, wheelSize-5);
            fill(0,0,0);
            ellipse(x + 71, y-16, wheelSize/10, wheelSize/10);
            

            // draw the car body
            noStroke();
            fill(255, 0, 115);
            rect(x + 15, y*2.9/4, carfront*5.2, carfront*4,carfront*.7); //top
            rect(x, y-2, carfront*10, carfront*2,carfront*1.5); //bottom
            stroke(255, 0, 0);
            line(x+65,y*2.9/4,x+93,carfront*14.8);
      

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

