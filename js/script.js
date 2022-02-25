let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let allItems = document.querySelector(".items");

const items = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    
    items.push(input.value);
    let task = document.createElement("article");
    let text = document.createElement("h5");
    var checkBox = cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "c1";
    cb.value = name;
    cb.checked = false;
  
    let textNode = document.createElement("h5");
    let rem = document.createElement("div");
    let up = document.createElement("div");
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
    up.addEventListener("click", () => {
      input.value = up.parentElement.firstChild.nextSibling.textContent;
      btn.textContent = 'Update';
      let index = items.indexOf(up.parentElement.firstChild.nextSibling.textContent);
      console.log(index);

      btn.addEventListener('click', () => {
        items.splice(index, 1, input.textContent);
        // items.push(input.textContent);
      allItems.removeChild(up.parentElement);
        btn.textContent = "Add";
        input.value = "";
      })
    })
    items.map((el) => {
      text.textContent = el;
    })
    console.log(task);
    rem.addEventListener("click", (e) => {
      e.preventDefault();
      allItems.removeChild(rem.parentElement);
    });
    let isComplete = false;

    checkBox.addEventListener('click', () => {
      console.log(checkBox.parentElement);
      isComplete = !isComplete;
      checkBox.parentElement.firstChild.nextSibling.style.textDecoration = isComplete ? "line-through" : "";
      checkBox.parentElement.firstChild.nextSibling.style.color = isComplete ? "grey" : "";
    })
    input.value = "";
  }
});

