const apiURL = "https://anderolimar.github.io/ac/"

callApi = (page) => {
    console.log("callApi")
    const request = new Request(`${apiURL}/api/page${page}.json`, {
        method: "GET"
      })

      showLoading()
      
      fetch(request)
      .then((response) => {
        hideLoading()
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((response) => {
        appendProducts(response.items)
        console.log(response);
        // …
      })
      .catch((error) => {
        console.error(error);
      });
    
}

function productElement(product) {
    var productHtml = `
<div class="mdl-layout__tab-panel is-active" id="overview">
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
            <img src="${product.image}">
        </header>
        <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div class="mdl-card__supporting-text">
                <h5>${product.number}</h5>
                <h4>${product.title}</h4>            
            </div>                                                                  
            <div class="mdl-card__actions">
                <a href="${product.link}" target="_blank" class="mdl-button">Ir para a página</a>
            </div>
        </div>

    </section>
</div>`

    return parseHTML(productHtml);
}

function parseHTML(html) {
    var t = document.createElement('li');
    t.innerHTML = html;
    return t;
}

function appendProducts(products) {
    cleanProducts()
    for(product of products) {
        addProduct(productElement(product))
    }
}

function addProduct(productElement) {
    var list = document.getElementById("list")
    list.appendChild(productElement);
}

function cleanProducts(){
    var list = document.getElementById('list');
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function showLoading() {
    document.getElementById("wrapper").style.display = 'block';
}

function hideLoading() {
    document.getElementById("wrapper").style.display = 'none';
}
