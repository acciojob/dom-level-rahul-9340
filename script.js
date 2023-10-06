//your JS code here. If required.

	let currentlevel = document.getEelementById("level")
function levelfinder (currentlevel)
	{
		let currentnode = currentlevel.parentNode;
		let level = 1;
       while(currentnode.tagName !== "html")
	   {
		currentnode.parentNode.remove()
		currentnode = currentnode.parentNode;
		   level++;
       }
		alert(`The level of the element is:${level}`);
     }

levelfinder(currentlevel);

