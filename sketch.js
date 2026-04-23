const body = document.body;
const main = document.createElement("div");
main.className="main";
body.append(main);

function resize(newSize)
{

}

buttonSize = document.createElement("button");
body.append(buttonSize);
buttonSize.textContent = "Create New Grid";

let size = 16; //prompt("How big do you want the grid?");

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