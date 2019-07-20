/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const listItems = document.querySelectorAll('li');
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
      var startI = (page * studentsPerPage) - studentsPerPage ;
      var finishI = (page * studentsPerPage);
    for(let i = startI; i < finishI;i += 1)
    if(i >= startI && i< finishI){
        list[i].style.display = " "
    } else {
      list[i].style.display = "none";
    };
  
};



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


/***
function appendPageLinks(listItems){
  for(let i = 0; i<listItems.length; i += 1)

    var ul  = document.createElement("ul"); 
    var div = document.createElement("div");
    var li = document.createElement('li');
    var a = document.createElement('a');
    li.appendChild(a);
    ul.appendChild(li);
   };
  };
***/



// Remember to delete the comments that came with this file, and replace them with your own code comments.
