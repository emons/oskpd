 function start(){
    var rawData = $("#inputData").val();
    var input = rawData.trim().split(',');
    console.log(input);// LOL //console lol
    firstFit(input);
	bestFit(input);
	worstFit(input);
	//nextFit(input);
    //print();
    
  }

  var nextMemIndex=0;

  function firstFit(input) {
		$(input).each(function (i, val) {
    	$(blocks1).each(function (j, m) {
			console.log(m.allocated);
      	if( (m.size - m.allocated) >= val ) { //&& m.allocated == 0){
        	m.allocated =  +m.allocated + +val;
          return false;
        }
      });
    });
  }

  function bestFit(input) {
		$(input).each(function (i, val) {
    	//the smallest fitting memory  
    	minSize = 9999;
      minIndex = -1;
    	$(blocks2).each(function (j,m) {
      	//doesn't work, because wrong conditions
        freeMemory = m.size - m.allocated;
        if(+freeMemory - +val <= +minSize && +freeMemory - +val >= 0) {
        	minIndex = j;
        }
      });
	  if(minIndex != -1)
		blocks2[minIndex].allocated = +blocks2[minIndex].allocated + +val; 
    });
  }

  function worstFit(input) {
		$(input).each(function (i, val) {
			var largestMemIndex = 0;
    	largestMemIndex = getLargestIndex(blocks3)
      freeMemory = +blocks3[largestMemIndex].size - +blocks3[largestMemIndex].allocated;
    	if(val <= freeMemory) {
      	blocks3[largestMemIndex].allocated = +blocks3[largestMemIndex].allocated + +val;
      }
    });
  }

	function getLargestIndex(a) {
    var largestVal = 0;
    var largestIndex = 0;
		$(a).each(function (i, val) {
			var freeMem = +val.size - +val.allocated;
    	if(freeMem > largestVal) {
      	largestIndex = i;
        largestVal = freeMem;
      }
    });
    return largestIndex;
  }

  function nextFit(input) {
		
  }

  function cycleFit(input) {

  }
  
  function print () {
  	$(blocks1).each(function (i, val) {
    console.log(val);
    });
  }
  
  $(document).on('click', 'button', function() {
    start();
	load();
  });