

const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn =>{
      btn.addEventListener("click", function(){
        buttons.forEach(b => b.classList.remove("bg-green-800", "text-white"));

        this.classList.add("bg-green-800", "text-white")
      })

})



