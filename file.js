const statsContainer=document.querySelector(".stats");
const columns=document.querySelectorAll('.column');
let data=[]

//get data from json file
const fetchData=async()=>{
    const response=await fetch('data.json');
    data=await response.json();
    renderData(data)
}


// render data after get it
function renderData(data){
data.forEach(daydata=>{
    const height=daydata.amount * 1.5
    const dayHtml=`               <div class='day' data-amount=${daydata.amount}>
                  <div class='details-amount'>$${daydata.amount}</div> 
                  <span style="height:${height}% ;" class="column"></span>

                  <p>${daydata.day}</p>
                </div>`
statsContainer.insertAdjacentHTML("beforeend", dayHtml);
})}

//call function to fetch data
fetchData();



statsContainer.addEventListener('click',(e)=>{
    //get the parent div
    const parentDiv=e.target.closest('div');
    if(parentDiv.classList.contains('day')){
        //add active class to show the amount
        if(parentDiv.classList.contains('active'))
                  parentDiv.classList.remove('active');
        
        else   parentDiv.classList.add('active');
        
  
    
    


}})