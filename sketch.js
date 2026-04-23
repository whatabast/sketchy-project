const body = document.body;
// const wrapper = document.createElement("div");
// wrapper.className="wrapper";
// body.append(wrapper);

let wrapper = [];
let box = [];

for(let j=1; j<=16; j++)
{
    wrapper[j] = document.createElement("div");
    body.className="wrapper"+j;
    body.append(wrapper[j]);

    for(let i=1; i<=16; i++)
    {
        box[i] = document.createElement("div");
        box[i].className = "box" + i;
        wrapper[j].append(box[i]);
        box[i].textContent = "box" + i;
    }
}