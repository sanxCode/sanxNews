// Grab a news container
let newsAccordion = document.getElementById('newsAccordion');
// Creat a GET Requet
const xhr = new XMLHttpRequest;
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=7bf76a5f4f0c4153bb253982b80b1bdf`, true)


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(json)
        console.log(articles)
        let newshtml= '';

        articles.forEach((element,index) => {
            let news = `
            <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        ${element.title}
                                    </button>
                                </h2>
                            </div>
        
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">
                                    <p>${element.description}</p>
                                    <p>${element.content}.<a href="${element.url}" target = _blank>Read More</a>  </p>
                                </div>
                            </div>
            </div>`

            newshtml += news 

        });
        newsAccordion.innerHTML = newshtml;
    } else {
        console.log('Something Went Wrong');
    }

}



xhr.send();







