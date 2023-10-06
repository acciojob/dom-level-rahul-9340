//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
	  let levelElement = document.getElementById("level");
	  console.log(levelElement);
	  let level = 1;
	
	  while (true) {
	    if (levelElement.tagName === "HTML") {
	      break;
	    }
	    console.log(levelElement);
	    levelElement = levelElement.parentNode;
	    level++;
	  }
	
	  alert(`The level of the element is: ${level}`);
	});
	

