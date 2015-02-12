 var y = 1;
  
    function addRowOther() {
      var fooId = "foo";
      var foo = document.getElementById("fooBarOther");
      var elements = [];
	  
	var num = document.createElement("font");
	num.id="FontNode"+y;
	num.style.color="#ffffff"
	num.size="2"
	num.innerHTML=y;
	elements.push(foo.appendChild(num));	
	
	var select1 = document.createElement("select");
	select1.style.width="75px";
	select1.style.height = "21px";
	if( y < 10 )
	select1.style.marginLeft="12px";
	else
	select1.style.marginLeft="8px";
	
	elements.push(foo.appendChild(select1));

	var options = new Array("Carton","Bag","Tube","Pallet","Crate","Flat Pack","Roll");
	for (var i=0; i < options.length;++i)
	{	
		var optn = document.createElement("OPTION");
		optn.text = options[i];
		optn.value = options[i];
		select1.options.add(optn);	
	}
	
	elements.push(foo.appendChild(document.createTextNode(" ")));
	

      for (var i = 0; i < 4; i++) {
        var el = document.createElement("input");
        el.type = "text";
		el.style.width = "60px";
		el.style.height = "15px";	
      	if (i == 0) el.placeholder="length";
        else if (i == 1) el.placeholder="width";
        else if (i == 2) el.placeholder="height";
		else if (i == 3) el.placeholder="weight";
        elements.push(foo.appendChild(el));
       elements.push(foo.appendChild(document.createTextNode(" ")));
      }

	var image = document.createElement("img");
	image.src="/images/1.png";
	image.width="20";
	image.height="30";
	image.align="middle";
	image.onclick= function myFunction() 
	{
    	alert("Temp(Temperature)\nPlease enter required temperature during transit.\nNote:Vehicle will be pre-chilled to required temperatire");
	}
	elements.push(foo.appendChild(image));
	elements.push(foo.appendChild(document.createTextNode(" ")));

      var removeimage = document.createElement("img");
      removeimage.src="/images/2.png";
	removeimage.width="20";
	removeimage.height="30";
	removeimage.align="middle";
      removeimage.onclick = function(ev) {
		  var deletedRow;
        for (var i = 0; i < elements.length; i++) {
			deletedRow = elements[0].innerHTML;
			(elements[i].parentNode.removeChild(elements[i]));
		}
		var a = deletedRow;
		var b = ++deletedRow;
		var c = y-a;
		y--;
		for(var j=0; j<c; j++)
		{
			document.getElementById("FontNode"+b).innerHTML = a;
			document.getElementById("FontNode"+b).id = "FontNode"+a;
			a++;
			b++;
		}
      };
      elements.push(foo.appendChild(removeimage));
	elements.push(foo.appendChild(document.createElement("br")));
	
	 y++;
   }