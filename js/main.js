//  0        1          2
let todo = [
{name:"Activate International insurance ", available:true},
{name:"Exchange currency", available:true},
{name:"Pay landlord", available:false},
{name:"Book transfer", available:true},
{name:"Finish assigments", available:false},


];

// Pushing add a new WHATEVER to the Array
//fruits.push("blueberry");

// Create an empty array & copy FILTERED fruits to it
//let tempAr = fruits.filter(frt => frt == 'banana');

todo.forEach(td => {
// The old way we printed items
//document.getElementById('fruits').innerHTML += `<li>${frt}</li>`;

// Create a new element:            <li></li>
var oneTodo = document.createElement('li');

// Add inner HTML to it:            <li>apple</li>
oneTodo.innerHTML = td.name;

// Add a class to it:               <li class="fruit">apple</li>
oneTodo.classList.add('card1');

// If the fruit is unavailable:     <li class="fruit unavailable">apple</li>
if (td.available == false)
oneTodo.classList.add('carduna1');

// Add it to the fruits list:       <ul id="fruits"><li class="fruit unavailable">apple</li></ul>
document.getElementById('todo').appendChild(oneTodo);

});
