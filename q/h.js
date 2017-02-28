document.write('<div class="wrapper">');

  for (j=0;j<8;j=j+2) {
  	document.write('<div class="row">');
  	for (i=0;i<4;i=i+1) {
    	document.write('<div class="black"></div>');
    	document.write('<div class="white"></div>');
		}
    for(i=0;i<8;i=i+2){
    	document.write('<div class="white"></div>');
    	document.write('<div class="black"></div>');
		}
		document.write('</div>');
	}

 document.write('</div>');

