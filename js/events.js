


/*
    This part handle routes ( PAGES )    
*/
const y1 = document.getElementById("gotoy1");
const y2 = document.getElementById("gotoy2");
const y3 = document.getElementById("gotoy3");
const y4 = document.getElementById("gotoy4");
y1.addEventListener("click", () => {pages.setActivePageAtDOM("y1")});
y2.addEventListener("click", () => {pages.setActivePageAtDOM("y2")});
y3.addEventListener("click", () => {pages.setActivePageAtDOM("y3")});
y4.addEventListener("click", () => {pages.setActivePageAtDOM("y4")});



// handle navigator 
const navBtn = document.getElementById("nav_btn");
const homeBtn = document.getElementById("goto_home");
const informationBtn = document.getElementById("goto_info")
function displaynavigatorButtom(){
    document.querySelector(".navigator").classList.toggle("active")
}
navBtn.addEventListener("click",displaynavigatorButtom)
homeBtn.addEventListener("click",()=>{
    pages.setActivePageAtDOM("home");
    displaynavigatorButtom();
})
informationBtn.addEventListener("click",()=>{
    pages.setActivePageAtDOM("information");
    displaynavigatorButtom();
})
