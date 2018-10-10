var myButton = document.getElementById('onclickjs') // document.getElementById grabs the class
myButton.addEventListener("click", myFunction); // No parentheses behind myFunction, Parentheses makes the function run before click.
//It isn't on click because we aren't directly in the element from html

var myTxtBox = document.getElementById('txtBox')  // All I'm doing here is creating a variable that grabs the id txtBox
myTxtBox.addEventListener("focus", function() {  // This is an anonymus function.  Runs after focus and runs the code after it.
    alert("I am an anonymus function");
}); 

// focus is for when user clicks inside an element/text box at this point

/*function changeColor() {
document.getElementById('txtBox').style.backgroundColor = "grey";  // CSS on focus
}*/

  function myFunction() {
    alert("Clicked");
}
