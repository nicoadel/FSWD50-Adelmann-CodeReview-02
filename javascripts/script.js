/* toggles the dropdown - if he presses myDropdown
 (which is the menu.png in my img) it switches the class to 
 show (which is display:block instead of display:none) */
function myFunction() {
    document.getElementById("menu-dropdown").classList.toggle("show");
}
/* 
if the user clicks outside the box the dropdown closes
*/
window.onclick = function(event) {
  if (!event.target.matches('.img_button')) {  
    /* 
The if above is true if NOT(event.target.matches(imgbutton)) 
So if the user presses outside the box (event.target.matches(imgbutton) is FALSE
with the !(NOT) it becomes true so he goes inside the if
*/
    var dropdowns = document.getElementsByClassName("menu-items"); 
        /* 
  Variable for saving all elements of the menu inside an array 
  */
    var i; //counter
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]; 
  /* 
  everytime he goes inside this loop he newly sets openDropdown to dropdowns[counter] 
  so he can check if its class contains ".show". if it contains ".show" he removes the class
  and go's back to its original state in which display:none was set.    
  */
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}