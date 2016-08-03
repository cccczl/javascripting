var a = 1, b = 2, c = 3;
 (function firstFunction(){
         var b = 5, c = 6;
		(function secondFunction(){
             var b = 8;
			(function thirdFunction(){
                 var a = 7, c = 9;
                 (function fourthFunction(){
                     var a = 2, c = 8;
                 })();	
				 
			})();
			console.log("a: "+a+", b: "+b+", c: "+c);
		})();
		
	})();	
	//变量的作用于。由内向外继承。要求返回值时，根据语句由内向外得到。