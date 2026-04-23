//Create constant for the body element
const body = document.body;

// Create a parent for all the other boxes to nest inside
const main = document.createElement("div");
main.className="main";
body.append(main);

// Create a nested for loop that can create an NxN box of any size
let size = 16;
// console.log("Below size", size);


// Create a function that pops up a propmt for size input
function boxSize()
{
    let bS = prompt("How big would you like the grid?");
    if(bS > 0 && bS <= 100)
    {
        for(i=1; i<wrapper.length;i++)
        {
            wrapper[i].remove();
        }
        console.log("Valid");
        sizing(bS);
        // console.log(bS); 

    }
    else 
    {
        alert("Not Valid Size")
    }
}


let wrapper = [];
let box = [];

function sizing(size){
    // let wrapper = [];
    // let box = [];
    console.log(wrapper);

    for(let j=1; j<=size; j++)
    {
        wrapper[j] = document.createElement("div");
        wrapper[j].className="wrapper";
        main.append(wrapper[j]);

        for(let i=1; i<=size; i++)
        {
            box[i] = document.createElement("div");
            box[i].className = "box";
            wrapper[j].append(box[i]);
            // box[i].textContent = i;
        }
    }
}
sizing(size);

