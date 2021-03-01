var carInner = document.getElementById('corouselInner')
var xhr = new XMLHttpRequest()
var url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=90f4f1d9dc65497db2d9a55358a04910' ;

xhr.open('GET', url)
xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText)
        console.log(data)

        var len = data.articles.length
        for(let i=0;i<len;i++){
            let heading=document.createElement("h3");
            heading.innerHTML = data.articles[i].title;

            let content=document.createElement("p");
            content.setAttribute('class','newsData');
            content.innerHTML = data.articles[i].description;

            let source=document.createElement("p");
            source.innerHTML = data.articles[i].source.name;
            source.setAttribute('class','newsData');
            source.style.fontFamily = "Chalkduster, fantasy";

            let publishedAt=document.createElement("p");
            publishedAt.innerHTML = data.articles[i].publishedAt;
            publishedAt.setAttribute('class','newsData');

            let image = document.createElement('img');
            image.setAttribute('src',data.articles[i].urlToImage)

            var carItem = document.createElement('div')
            carItem.setAttribute('class', 'item')
            var br=document.createElement('br');
            var link=document.createElement('a');
            link.setAttribute('href',data.articles[i].url)
            link.innerHTML="Read the full Article";

            carItem.appendChild(heading);
            carItem.appendChild(br);
            carItem.appendChild(image);
            carItem.appendChild(br);
            carItem.appendChild(content);
            carItem.appendChild(source);
            carItem.appendChild(publishedAt);
            carItem.appendChild(link);

            document.getElementById('corouselInner').appendChild(carItem);
            corouselInner.childNodes[1].setAttribute('class', 'item active')


        }
    }


}
xhr.send()
