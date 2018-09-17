 function todays_date() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return(today);
}
/* toggles the dropdown - if he presses myDropdown
 (which is the menu.png in my img) it switches the class to 
 show (which is display:block instead of display:none) */
function myFunction() {
    document.getElementById("menu-dropdown").classList.toggle("show");
}

var capitalise_first_word = function(string) {
return (string.charAt(0).toUpperCase() + string.slice(1));
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
document.getElementById("date_paragraph").innerHTML = todays_date();