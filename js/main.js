//variables
//create total variable and set it to 0
let total = 0;

//functions
function init() {
  //add an event handler for cart-btn
  document.getElementById("cart-btn").addEventListener("click", function () {
    //create a variable for the div tag as a container: this will show product description and button
    let container = document.createElement("div");
    container.classList.add("container");
    //create a variable for the p tag - product description
    let pDescription = document.createElement("p");
    pDescription.classList.add("description");
    //create a variable for the button tag - remove product action
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    //add the product description text using innerHTML
    pDescription.innerHTML = "Classic smashed Cheeseburger";
    //add the button label text using innerHTML
    removeBtn.innerHTML = "remove";

    //add an event handler for remove button - use the variable created above and add the event parameter inside the function declaration
    removeBtn.addEventListener("click", function (event) {
      //subtract 12 to the total variable created globally
      total -= 12;
      //show the new total value inside the html tag (span with id="total") using innerHTML
      document.getElementById("total").innerHTML = total;
      //remove the div container using event.target.parentNode.remove();
      event.target.parentNode.remove();
    });

    //add the product description item (p tag variable created above) inside the div tag container using appendChild();
    container.appendChild(pDescription);
    //add the product remove button (button tag variable created above) inside the div tag container using appendChild();
    container.appendChild(removeBtn);
    //add the div tag container (div tag variable created above) inside the div with the id="cart-list" using appendChild();
    document.getElementById("cart-list").appendChild(container);
    //add 12 to the total variable created globally
    total += 12;
    //show the new total value inside the html tag (span with id="total") using innerHTML
    document.getElementById("total").innerHTML = total;
    //
  });
}
//main loading event
document.addEventListener("DOMContentLoaded", function () {
  init();
});
