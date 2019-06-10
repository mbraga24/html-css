let lis = document.querySelectorAll("li");

for(let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function(){
    this.style.color = "red";
  });

  lis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
}

for(let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(){
    this.classList.toggle("selected")
  })
}