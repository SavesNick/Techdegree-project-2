/******************************************
FSJS project 2 - List Filter and Pagination
******************************************/

const listItems = document.querySelectorAll('.student-item');
const studentsPerPage = 10

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

function showPage(list, page){
      var startI = (page * studentsPerPage) - studentsPerPage ; // "I"stands for index
      var finishI = (page * studentsPerPage);
    for(let i = 0; i < list.length; i += 1)
    if(i >= startI && i < finishI){
        list[i].style.display = " ";
    } else {
      list[i].style.display = "none";
    };
  
};
showPage(listItems , 1);


/*** 
 "I" stands for index

  Create the `showPage` function to hide all of the items in the
 list except for the ten you want to show.

  Pro Tips:
  - Keep in mind that with a list of 54 students, the last page
   will only display four.
  - Remember that the first student has an index of 0.
  - Remember that a function `parameter` goes in the parens when
   you initially define the function, and it acts as a variable
   or a placeholder to represent the actual function `argument`
   that will be passed into the parens later when you call or
   "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
   example = contentDiv.appendChild(newParagraph)
***/



function appendPageLinks(list){
  var numOfPages = Math.ceil(list.length / studentsPerPage)
 
      var ul  = document.createElement("ul"); 
      var div = document.createElement("div");
      var page = document.querySelector(".page");
      
    page.appendChild(div)
    div.appendChild(ul);
    div.setAttribute("class","pagination")
    

    for(let i = 1; i < numOfPages; i+=1){
      var li  = document.createElement("li");
      var a = document.createElement("a");
        a.textContent = i;
        a.href = "#";

        ul.appendChild(li);
        li.appendChild(a);

    };

    

//ul.firstElementChild.className('active')

//for(let i = 0; i< anchor.length;i += 1){
    ul.addEventListener("click", (e) => {
      var buttons = e.target;
      var numValue = e.target.textContent;
/*** for(let i = 0; i < liGroup.length; i += 1){
      
};***/
      //e.target.className = "active";
      showPage(listItems, numValue);
      var anchor = document.querySelectorAll("a");
      for(let i = 0; i< anchor.length;i += 1){
        anchor[i].className = "none";
      };
      buttons.className = "active"
  });
//};
};
showPage(listItems , 1);
appendPageLinks(listItems);