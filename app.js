function toggle() {
  var table = document.getElementById('dropdownTable');
  if (sessionStorage.getItem('key') == 'True')
  {
    table.style.display = "none";
    sessionStorage.setItem("key", "False")
  }
  else {
    table.style.display = "block";
    sessionStorage.setItem("key", "True")
  }
}


//------------------------------------------------------------------------------------------
function toggle2(btnID, eIDs) {

    // Feed the list of ids as a selector
    var theRows = document.querySelectorAll(eIDs);

    // Get the button that triggered this
    var theButton = document.getElementById(btnID);

    // If the button is not expanded...
    if (theButton.getAttribute("aria-expanded") == "false") {

      // Loop through the rows and show them
      for (var i = 0; i < theRows.length; i++) {
        theRows[i].classList.add("shown");
        theRows[i].classList.remove("hidden");
      }

      // Now set the button to expanded
      theButton.setAttribute("aria-expanded", "true");
    } 
    
    // Otherwise button is not expanded...
    else {
        
      // Loop through the rows and hide them
      for (var i = 0; i < theRows.length; i++) {
        theRows[i].classList.add("hidden");
        theRows[i].classList.remove("shown");
      }
      
      // Now set the button to collapsed
      theButton.setAttribute("aria-expanded", "false");
    }
  }