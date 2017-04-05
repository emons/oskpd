var blocks1 = [
    {'size':50, 'allocated' : 10},
    {'size':50, 'allocated' : 15},
    {'size':50, 'allocated' : 20},
    {'size':50, 'allocated' : 25},
    {'size':50,	'allocated' : 30},
    {'size':50, 'allocated' : 35}
  ];
  var blocks2 = [
    {'size':50, 'allocated' : 10},
    {'size':50, 'allocated' : 15},
    {'size':50, 'allocated' : 20},
    {'size':50, 'allocated' : 25},
    {'size':50,	'allocated' : 30},
    {'size':50, 'allocated' : 35}
  ];
  var blocks3 = [
    {'size':50, 'allocated' : 10},
    {'size':50, 'allocated' : 15},
    {'size':50, 'allocated' : 20},
    {'size':50, 'allocated' : 25},
    {'size':50,	'allocated' : 30},
    {'size':50, 'allocated' : 35}
  ];

function load() {
  
	//console.log("Ŗeady");
	fitBuilder = {
    width: '300px',
    sum: function(blocks) {
      var result = 0;
      $.each(blocks, function(index, value) {
        result += value.size;
      });
      return result;
    },
    distributeBlocks: function(target, blocks) {
      var offset = 0;
	  var textOffset1 = 30;
	  var textOffset2 = 50;
      var g = d3.select(target);
      g.selectAll("rect").remove();
	   g.selectAll("text").remove();
      var sum = fitBuilder.sum(blocks);
      $.each(blocks, function(index, value) {
		  
		var freeMem = value.size - value.allocated;
		
		console.log(value.allocated);
		console.log(freeMem);
		
		var x1 = 0;
		var y1 = offset/sum * 100;
	  
		offset += value.allocated;
	  
		var x2 = 0;
		var y2 = offset/sum * 100;
	  
		var height1 = value.allocated/sum * 100;
		var height2 = freeMem/sum * 100;
		
		var textY1 = y1 + 10;
		var textY2 = y1 + 30;
	  
        var rect2 = g.append("rect")
		.attr("x", x2)
		.attr("y", y2 + '%')
		.attr("width", 100)
		.attr("height", height2 + '%')
		.style("stroke", "black")
		.style("stroke-width", 2)
		.style("fill", "white");
	   
	   var rect1 = g.append("rect")
		.attr("x", x1)
		.attr("y", y1 + '%')
		.attr("width", 100)
		.attr("height", height1 + '%')
		.style("stroke", "black")
		.style("stroke-width", 2)
		.style("fill", "black");
	   
          rect1.attr('class', 'alloc');
		  
		offset += freeMem;
		
		
		
		
		g.append('text')
          .attr("x", 120)
          .attr("y", textOffset1)
          .text("Allocated:" + value.allocated);
		  
		  g.append('text')
          .attr("x", 120)
          .attr("y", textOffset2)
          .text("Free:" + freeMem);
		  
		  textOffset1 += 80;
		  textOffset2 += 80;
      });
	  
    }
  }
  
  fitBuilder.distributeBlocks("#first-fit", blocks1, 0);
  fitBuilder.distributeBlocks("#next-fit", blocks2, 0);
  fitBuilder.distributeBlocks("#best-fit", blocks3, 0);
  fitBuilder.distributeBlocks("#worst-fit", blocks4, 0);
}

load();



