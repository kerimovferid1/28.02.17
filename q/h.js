document.write('<div class="wrapper">');
document.write('<div class="row">');
  for (j=0;j<8;j=j+2) {
  	for (i=0;i<4;i=i+1) {
    	document.write('<div class="black"></div>');
    	document.write('<div class="white"></div>');
		}
    for(i=0;i<8;i=i+2){
    	document.write('<div class="white"></div>');
    	document.write('<div class="black"></div>');
		}
	}
document.write('</div>');
 document.write('</div>');

