//Create constant for the body element
const body = document.body;
// const notValid = document.createElement("div");


// Create a function that pops up a propmt for size input
function boxSize()
{
    let size = prompt("Input");
    if(size > 0 && size <= 100)
    {
        console.log("Valid");
    }
    else 
    {
        alert("Not Valid Size")
    }
}


// Create a parent for all the other boxes to nest inside
const main = document.createElement("div");
main.className="main";
body.append(main);

// Create a nested for loop that can create an NxN box of any size
let size = 16;

let wrapper = [];
let box = [];

for(let j=1; j<=size; j++)
{
    wrapper[j] = document.createElement("div");
    wrapper[j].className="wrapper"+j;
    main.append(wrapper[j]);

    for(let i=1; i<=size; i++)
    {
        box[i] = document.createElement("div");
        box[i].className = "box" + i;
        wrapper[j].append(box[i]);
        box[i].textContent = "box" + i;
    }
}