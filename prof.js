$(document).ready(function(){
    function source(id, name, category, language){
    this.id = id;
    this.name = name;
    this.category = category;
    this.language = language;
}

var articleSources = [];
var sourceName;
var sourceCategory;

 $.ajax({
        url: 'https://newsapi.org/v1/sources?language=en'
    }).done(function(data){
        //pushing sources into array
        for(var i = 0; i < data.sources.length; i++){
            //var curSource = new source(data.sources[i].id, data.sources[i].name, data.sources[i].category, 
            //data.sources[i].language);
            articleSources.push(new source(data.sources[i].id, data.sources[i].name, data.sources[i].category, 
            data.sources[i].language));
        }
        console.log(articleSources);
        //looping through all sources in array and requesting articles
        for(var x = 0; x < articleSources.length; x++){
            sourceName = articleSources[x].name;
            sourceCategory = articleSources[x].category;
            $.ajax({
                url: 'https://newsapi.org/v1/articles?source='+articleSources[x].id+'&sortBy=latest&apiKey=5c34eb5d123e4b2c94c3d682808a60f0'
            }).done(function(data){
                //for each source, request articles
                for(var j = 0; j < data.articles.length; j++){
                    var divArticle = "<div class='article'>"
                    +"<div class='imgDiv'><img class='articleImg' src='"+data.articles[j].urlToImage+"'/></div>"+
                    "<h3 class='divTxt'>"+data.articles[j].author+"</h3>"+
                    //"<h1 class='divTxt'>"+data.articles[j].title+"</h1>" +
                    "<h2 class='divTxt'>"+data.articles[j].description+"</h2>" +
                    "</div>";
                     $('#mainContent').append(divArticle);

                    /*
                    $('.article').append("<img class='articleImg' src='"+data.articles[j].urlToImage+"'/>");
                    $('.article').append("<h1 class='divTxt'>"+data.articles[j].title+"</h1>" );
                    $('.article').append("<h2 class='divTxt'>"+data.articles[j].description+"</h2>" );
                    $('.article').append("<h3 class='divTxt'>"+data.articles[j].author+"</h3>" );
                    $('.article').append("<h4 class='divTxt'>"+ sourceName + ' ' + sourceCategory+"</h4>");
                    $('#container').append(divArticle);
                    */

                }
            });

        }
    });
    


});



