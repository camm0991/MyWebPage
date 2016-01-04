/*
 *Script for updating blog news section
 */
(function myBlog() {

//Attributes and init
    var app = {
        DOMapi: domApiFunc(),
        dataApi: dataApiFunc(),
        //addArticles: addArticlesFunc,
        addSideNews: addSideNewsFunc,
        mainContainer: null,
        sections : null,
        menu: null,
        init: init
    };

    function init() {
        this.addSideNews();
    };
//END Attributes and init

//Side news
    function addSideNewsFunc() {
        
        function generateSideNews() {
            var newsContainer = this.DOMapi.getContainer('#newsContainer');
            var newsList = document.createElement('nav');
            newsContainer.appendChild(newsList);

            function addList(item) {
                newsList.innerHTML += "<li><a href=''>" + item.title 
                + "</a></li>";
            }
            this.DOMapi.addItems(this.menu, addList);
        }

        function addMenuToDOM(obj) {
            console.log(obj.data.sections);
            this.sections = obj.data.sections;
            this.menu = obj.data.menu;
            generateSideNews.call(this);
        }

        this.dataApi.getData(addMenuToDOM.bind(this))
    };
//END Side news

//Articles
    //Creates new section blocks with retrieved news
    /*function addArticlesFunc(obj) {
        this.mainContainer = this.DOMapi.getSectionContainer("#sections");

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
    }*/

    function domApiFunc(){
        function getContainer(id){
            return document.querySelector(id);
        }

        function addItems(items, callback){
            for (var i=0; i< items.length; i++){
                callback(items[i]);
            };
        }
        var publicAPI ={
            getContainer : getContainer,
            addItems: addItems
        }
        return publicAPI;
    };
//END Articles

//Data
    //Reads JSON file
    function dataApiFunc() {

        var URLs = {
            get: "data/sections.json"
        }

        function getData(callBack) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    callBack(JSON.parse(xmlhttp.responseText));
                }
            };
            xmlhttp.open('GET', URLs.get, true);
            xmlhttp.send();
        }

        return {
            getData: getData
        }
    }
//END Data

//Execution
    //Execute update
    app.init();
//END Execution
})();