// Grab a news container
let newsAccordion = document.getElementById('newsAccordion');
let url = 'http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7bf76a5f4f0c4153bb253982b80b1bdf'
// Creat a GET Requet
const xhr = new XMLHttpRequest;
xhr.open('GET', url, true)


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(json)
        console.log(articles)
        let newshtml= '';

        articles.forEach((element,index) => {
            let news = `
            <div class="media" id="news${index}">
                <img src="${element.urlToImage}" width="150px" class="mr-3" alt="...">
                <div class="media-body">
                  <h5 class="mt-0">${element.title}</h5>
                  <p>${element.description} </p>
                  <p>${element.content}</p>
                  <a href="${element.url}" class="btn btn-primary" target="_blank">Read More</a>
                </div>
              </div>
              <br>`

            newshtml += news 

        });
        newsAccordion.innerHTML = newshtml;
    } else {
        console.log('Something Went Wrong');
    }

}



xhr.send();







