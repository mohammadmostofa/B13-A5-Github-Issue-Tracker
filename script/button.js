

const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn =>{
      btn.addEventListener("click", function(){
        buttons.forEach(b => b.classList.remove("bg-white", "text-white"));

        this.classList.add("bg-white", "text-black")
      })

})



