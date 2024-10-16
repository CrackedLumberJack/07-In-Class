/*
    This is a comment
    Hello

dovument: Current Document
getElementById: Gets the element by id
innerHTML: Changes/gets the html code within a given element
function: piece of code you can call by name
value: whatever is showing inside a textbox
textContent: Allows you to get or change the text within an element

Set the base price
Add the additonal people * 4
Print out the answer

*/


//document.getElementById("calc").addEventListener('submit', function(event) {
//    event.preventDefault();

function CalculateParty(){

    let partyType = document.getElementById("partyType").value;
    let additional = document.getElementById("Additional").value;
    let totalCost = parseInt(partyType) + additional * 4;
    document.getElementById("answer").textContent = `Cost: $${totalCost}`;
}
//});