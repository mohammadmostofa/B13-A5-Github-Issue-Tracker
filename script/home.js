 const AllCardDisplay = document.getElementById("All-card-display");
 let AllCard =[];

  AllcardsAccess =() =>{
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(response=>response.json())
  //.then((json) => console.log(json.data))
  .then((json) => {
      
       AllCard = json.data;
       const totalCount = AllCard.length;
         
        //  condition
                 if(AllCardDisplay){
                   AllCardDisplay.innerHTML = `${totalCount} issue `;
                 }

                 
                // catch json data
                CallToDisplay(AllCard);

        })


     
        // AllCardDisplay(json.data) next part


       const CallToDisplay = (cards) =>{
           
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

     if(!cardContainer){
      return
     };



    // forEach function in cards
       cards.forEach ((card) => {


         const div = document.createElement("div");
                  div.innerHTML = `
                  
            
<div class="grid grid-cols-2 max-w-[1100px] w-full bg-white py-10 px-4 mt-5 border-t-[10px]  ${card.status === 'open' ? 'border-green-800'  : 'border-violet-900' }  rounded-xl shadow-sm">

        <div class="col-span-1 py-2">
 
             <img src="  ${card.status === 'open' ?  "assets/images/open_status.png" : "assets/images/close_status.png" } " alt="issue catch">
    
        </div>

        <div class="col-span-1 text-end">
          <button class="border border-red-500 px-8 py-2 bg-[#FEECEC] font-semibold rounded-md
               ${
              card.priority ===  'high' ? ' bg-red-200 text-red-800' :
              card.priority ===  'medium' ?  'bg-yellow-200 text-yellow-600':
              card.priority === 'low' ? 'bg-gray-200 text-gray-500':
               'bg-black' }">
          
              ${card.priority}

          </button>
        </div>

        <div class="col-span-full font-bold text-[16px] py-5">
          <span> ${card.title}  </span>
        </div>

           <div class="col-span-full"> ${card.description} </div>


        <div class="space-x-5 py-5 flex">
        

        ${card.labels.map(labal => ` 
                    <button class="btn btn-primary bg-[#FDE68A] text-[#D97706] border-none rounded-lg"> <i class="fa-solid fa-bug"></i> ${labal} </button>


          `).join("")}
                  
          
            
        </div>
         
            <div class=" border-b-2 py-3 border-gray-300 col-span-full px-0 "></div>



        <div class="col-span-full py-5">

        <div class="flex justify-between items-center">
         <div> ${card.author} </div>
         <div> ${card.createdAt}  </div>
        </div>           

        </div>

        <div class="col-span-full">
           
        <div class="flex justify-between items-center">
         <div> ${card.assignee} </div>
         <div> ${card.updatedAt}  </div>
        </div>

        </div>

      </div>


                
                  `;

                  // appent the card in cardcontainer
                  cardContainer.appendChild(div)

       })
            
       

  }

  // allbtn

  document.getElementById("AllBtn").addEventListener('click', () => {
    CallToDisplay(AllCard);
     AllCardDisplay.innerHTML = `${AllCard.length} issue `;

  });

  // openbtn

  document.getElementById("open-btn").addEventListener('click', ()=>{
        const OpenCard = AllCard.filter(card => card.status === "open" );
        CallToDisplay(OpenCard);
         AllCardDisplay.innerHTML = `${OpenCard.length} issue `;

  });


    // openbtn

  document.getElementById("close-btn").addEventListener('click', ()=>{
        const closeCard= AllCard.filter(card => card.status === 'closed');
        CallToDisplay(closeCard)
         AllCardDisplay.innerHTML = `${closeCard.length} issue `;

  });



 }

AllcardsAccess();






 
 