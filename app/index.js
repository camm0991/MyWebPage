/*
*Script for updating blog news section
*/

(function myBlog(){

  var app = {
    myDOMapi: domApiFunc(),
    addSections: addSectionsFunc,
    updateArticles: updateArticleText,
    mainContainer: null,
    init: init
}


//var tagElement = document.getElementById("theButton");
//tagElement.addEventListener("click", loadXMLDoc, false);

function loadXMLDoc() {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  /*if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }*/
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("demo").innerHTML =
      xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", "data.txt", true);
  xmlhttp.send();
}


function init() {
    this.addSections();      
}


//Creates new section blocks with retrieved news
function addSectionsFunc(){
    this.mainContainer = this.myDOMapi.getSectionContainer("#sections");

   //Define section elements
    var section = document.createElement('section');
    var article = document.createElement('article');
    var div_header = document.createElement('div');
    var header = document.createElement('header');
    var header_content = document.createElement('h2');
    var header_button = document.createElement('button');
    var div_content = document.createElement('div');
    var image = document.createElement('img');
    var content = document.createElement('p');
    
    //Create section structure
    section.appendChild(article)
    
    //Header
    article.appendChild(div_header);
    div_header.appendChild(header);
    header.appendChild(header_content);
    header.appendChild(header_button);
    header_content.innerHTML = 'Generic title';
    header_button.innerHTML = 'Generic button';
    
    //Content
    article.appendChild(div_content);
    div_content.className = 'article-content';
    //Add image
    div_content.appendChild(image);
    image.src = 'images/generic.png';
    image.style.width = '200px';
    image.style.height = '200px';
    //Add content
    div_content.appendChild(content);
    content.className = 'font-monospace';
    content.innerHTML = 'Generic information';
    
    //Add new section to the sections 
    this.mainContainer[0].appendChild(section)
    console.log(this.mainContainer[0].children);
}

function updateArticleText(){
    var sections = this.myDOMapi.getSections('section');
    for (var i = 0; i < sections.length; i++) {
        var p = sections[i].children[0].children[1].getElementsByTagName('p');
        for (var j = 0; j < p.length; j++) {
            p[j].textContent = "lorem";
        };
    };
}

function domApiFunc(){
  function getSectionContainer(id){
    return document.querySelectorAll(id);
  }
  function addItems(items, callBack){
    for (var i = 0; i < items.length; i++) {
        callBack(items[i]);
    };
  }
  var publicAPI = {
    getSectionContainer: getSectionContainer,
    addItems: addItems
  }
  return publicAPI;
};

//Execute update
app.init();
})();

