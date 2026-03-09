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




      // modal api setup

      window.LoadCardDetails =async (id)=>{
           await delay(100);
            const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
            const res = await fetch(url)
            const data =await res.json()
            const details =data.data
            displayCardDetails(details); //call to catch function

      }




            const displayCardDetails =(card)=>{
                     setTimeout((ms) => {
                      
                     }, 2000);

                       //console.log(card)
                       const detailsBox = document.getElementById("details_box");
                       detailsBox.innerHTML = `
                                      
                       <div class="flex flex-col  space-y-5">

      <h2 class="font-bold text-[20px] ">${card.title}</h2>
      <div class="flex items-start space-x-2">
        <button class="btn btn-sm rounded-full border-none outline-none text-white ${card.status === 'open' ? 'bg-green-800'  : 'bg-violet-900' } ">open </button><span>.</span>
        <h3>Opened by ${card.author} .</h3>
        <h4>${card.createdAt}</h4>
      </div>
         
      <div class="flex justify-start items-start space-x-4">
                   ${card.labels.map(labal => ` 
                  <span class="px-4 bg-[#FDE68A] text-[#d51500] border-none rounded-full text-center "><i class="fa-solid fa-bug"></i> ${labal}</span>
                 `).join("")}
                 
      </div>
         
      <div> 
        <p>${card.description}</p>
      </div>

      <div class="flex justify-between  bg-slate-50 py-4 px-2 space-y-2">
             <div class=" flex-1 space-y-3">
                     <h2>assign:</h2>
                     <h3 class="font-semibold text-black ">${card.assignee}</h3>
             </div>

             <div class="flex-1  space-y-3 ">
                     <h2>priority:</h2>
                               <button class="border-2 border-black btn btn-sm  bg-[#FEECEC] font-semibold  rounded-md text-bold outline-none
               ${
              card.priority ===  'high' ? ' bg-red-200 text-red-800 border-red-900' :
              card.priority ===  'medium' ?  'bg-yellow-200 text-yellow-600 border-yellow-700':
              card.priority === 'low' ? 'bg-gray-200 text-gray-500 border-black':
               'bg-black' }">
          
              ${card.priority}

          </button>
             </div>

      </div>

    </div>

                       `
                      document.getElementById("my_modal_5").showModal();//showModal holo daisy ul created show function
            };


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
          <button class="border-2 border-black btn btn-sm  bg-[#FEECEC] font-semibold  rounded-md text-bold outline-none
               ${
              card.priority ===  'high' ? ' bg-red-200 text-red-800 border-red-900' :
              card.priority ===  'medium' ?  'bg-yellow-200 text-yellow-600 border-yellow-700':
              card.priority === 'low' ? 'bg-gray-200 text-gray-500 border-black':
               'bg-black' }">
          
              ${card.priority}

          </button>
        </div>

        <div onclick="LoadCardDetails(${card.id})"  class="col-span-full font-bold text-[16px] py-5">
        
          <span> ${card.title}  </span>
        </div>

           <div class="col-span-full"> ${card.description} </div>


        <div class="space-x-5 py-5 flex">
        

        ${card.labels.map(labal => ` 
         <span class="px-4 py-1 bg-[#FDE68A] text-[#d51500] border-none rounded-full text-center text-nowrap"><i class="fa-solid fa-bug"></i> ${labal}</span>
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


//search btn
    const searchIssueDetails = ()=>{
          const searchInput = document.getElementById("search_issue").value;
          if(!searchInput){
            return  alert("Try Agian !")
          } ;

          // fillter arraw functio of Allcard
           const searchCards = AllCard.filter(issue =>
           issue.title.toLowerCase() === (searchInput.toLowerCase())

           )    
             
           CallToDisplay(searchCards);
           AllCardDisplay.innerHTML = `${searchCards.length} issue`
    }

  document.getElementById("Search_btn").addEventListener("click", searchIssueDetails);


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




 
 