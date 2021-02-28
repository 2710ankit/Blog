var carInner = document.getElementById('containerCarousel')
var xhr = new XMLHttpRequest()
var url = "http://newsapi.org/v2/everything?q=tesla&from=2021-01-28&sortBy=publishedAt&apiKey=90f4f1d9dc65497db2d9a55358a04910"

xhr.open('GET', url)
xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText)
        console.log(data)

        var len = data.articles.length
        for(let i=0;i<len;i++){
            let heading=document.createElement("h3");
            heading = data.articles[i].title;
            document.getElementById("newsHeading").innerHTML= heading;

            let content=document.createElement("p");
            content = data.articles[i].content;
            document.getElementById("newsContent").innerHTML= content;

            let source=document.createElement("p");
            source = data.articles[i].source.name;
            document.getElementById("newsSource").innerHTML= source;

            let publishedAt=document.createElement("p");
            publishedAt = data.articles[i].publishedAt;
            document.getElementById("newsPublishedAt").innerHTML= publishedAt;
            document.getElementById("newsImage").src = data.articles[i].urlToImage;
        }
    }


}
xhr.send()
