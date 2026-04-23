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
    let bS = prompt("Input");
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
}
sizing(size);

