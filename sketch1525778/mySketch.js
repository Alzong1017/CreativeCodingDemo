function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
}

function draw() {
	background(0);
	for(var x=25;x<width;x=x+50){ 
		for(var y=25;y<height;y=y+50){
		strokeWeight(1)
		noFill()
		stroke("#e9ecef")
		ellipse(x,y,50+mouseX/80); 
		}
	}
	for(var a=10;a<width;a=a+50){ 
		for(var d=10;d<height;d=d+50){
		strokeWeight(1)
		noFill()
		stroke("#065a60")
		ellipse(a,d,50+mouseX/70); 
		}
	}
	
	for(var z=50;z<width;z=z+50){ 
		for(var a=50;a<height;a=a+50){
		strokeWeight(1)
		noFill()
		stroke("#FFDF73")
		ellipse(z,a,30+mouseX/100);
		}
	}
	for(var e=50;e<width;e=e+50){ 
		for(var f=50;f<height;f=f+50){
		strokeWeight(3)
		noFill()
		stroke("#fe6d73")
		ellipse(e,f,30+mouseX/60);
		}
	}
	

for(var h=30;h<width;h=h+50){ 
		for(var g=30;g<height;g=g+50){
		rectMode(50) 
		strokeWeight(1)
		stroke("#7b2cbf")
		rect(h,g,60+mouseX/90);
		}
	}
}