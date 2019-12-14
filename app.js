const btns = document.querySelectorAll(".buttons button");
const cat = document.getElementsByClassName("cat")[0];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
  console.log(this.getAttribute("data-add"));

  if (this.getAttribute("data-add")) {
    console.log("add");
    cat.classList.add(this.getAttribute("data-add"));
  }

  if (this.getAttribute("data-remove")) {
    console.log("remove");
    cat.classList.remove(this.getAttribute("data-remove"));
  }
}
