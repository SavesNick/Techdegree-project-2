/******************************************
FSJS project 2 - List Filter and Pagination
******************************************/

const listItems = document.querySelectorAll('.student-item'); // global variables
const studentsPerPage = 10



function showPage(list, page){                                                                 // showPage Function. 
      var startI = (page * studentsPerPage) - studentsPerPage ;                               // "I"stands for index, start Index
      var finishI = (page * studentsPerPage);                                                 // finish index
    for(let i = 0; i < list.length; i += 1)                                                  // loops through list
    if(i >= startI && i < finishI){
        list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    };
  
};
showPage(listItems , 1);


   //appendPageLinks function to generate, append, and add

function appendPageLinks(list){                                                              //function to generate, append and add page links.
  var numOfPages = Math.ceil(list.length / studentsPerPage)                                 // variable that calculate the number of pages
 
      var ul  = document.createElement("ul");                                              // creates "ul" element 
      var div = document.createElement("div");                                            // creates "div" element
      var page = document.querySelector(".page");
      
    page.appendChild(div)                                                                 // appends div to .page
    div.appendChild(ul);                                                                  // appends ul to div 
    div.setAttribute("class","pagination")                                                // setting attributes to div
    

    for(let i = 1; i < numOfPages + 1; i+=1){                                             
      var li  = document.createElement("li");                                            // li tag 
      var a = document.createElement("a");                                               // a tag
        a.textContent = i;
        a.href = "#";

        ul.appendChild(li);                                                             // appends li to ul 
        li.appendChild(a);                                                              // append a to li

    };

    
    ul.addEventListener("click", (e) => {                                              // event listener
      var buttons = e.target;                                                          // targets link that was clicked via event listener 
      var numValue = e.target.textContent;                                             // retains value of clicked link

      
      showPage(listItems, numValue);
      var anchor = document.querySelectorAll("a");                                     // store a tag in the anchor variable 
      for(let i = 0; i< anchor.length;i += 1){                                         // loops through a tags
        anchor[i].className = "none";                                                   
      };
      buttons.className = "active"
  });

};
showPage(listItems , 1);                                                    // calling the functions. 
appendPageLinks(listItems);