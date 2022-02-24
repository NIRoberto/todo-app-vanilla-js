let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let allItems = document.querySelector(".items");

const items = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  items.push(input.value);
  let task  =  document.createElement("article");
  let text = document.createElement("h5");
 var checkBox = cb = document.createElement( "input" );
cb.type = "checkbox";
cb.id = "c1";
cb.value = name;
  cb.checked = false;
  
  let textNode = document.createElement("h5");
  let rem  = document.createElement("div");
  let up  = document.createElement("div");
  text.appendChild(textNode);
  text.classList.add("text");
task.appendChild(cb);

task.appendChild(text);
task.appendChild(up);
task.appendChild(rem);
  allItems.appendChild(task);
  rem.textContent = "Remove";
  up.textContent = "Update";
  rem.classList.add("remove");
  up.classList.add("update");  
  items.map((el)=>{
    text.textContent = el;
  })
  console.log(task);
  rem.addEventListener("click", (e) => {
     e.preventDefault();
    checkBox.addEventListener('click', () => {
       
     })

    // allItems.removeChild( rem.parentElement)
  });
  // cd.addEventListener('click', () => {
  //   e.preventDefault();

  // })

});
