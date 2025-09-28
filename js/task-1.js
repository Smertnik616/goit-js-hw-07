const nav = document.querySelector("#categories");
const items = document.querySelectorAll('.item');
console.log("Number of categories:", items.length);


items.forEach ((item) =>{
    const title = item.querySelectorAll("h2").textContent;
    
    const elementsCount = item.querySelectorAll("ul > li").length;


    
  console.log("Category:", title);
  console.log("Elements:", elementsCount);

});






























// const titles = document.querySelectorAll(".item > h2");


// const elements = document.querySelectorAll("ul > li").length;

// titles.forEach((h2) => {
//     console.log("Category:", h2.textContent)
    
// });




