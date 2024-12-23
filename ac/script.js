var form;
var inputValue;
var callApi = ()=>{};
const maxProductNumber = 2;

function searchSubmit(event) {
    console.log(inputValue.value);
    event.preventDefault();
}

window.onload = function () {

    form = document.getElementById("searchForm");
    inputValue = document.getElementById("sample6");

    form.addEventListener("submit", searchSubmit);

    inputValue.addEventListener("keyup", function (event) {
        console.log("keyup");
        if (event.key === "Enter") {
            console.log(inputValue.value);
            var prodId = inputValue.value.toLowerCase()

            if(!validateProduct(prodId)) {
                prodId = "not-found"
            }
            
            window.location.href = generateURL(prodId)
        }
    });

    callApi(1)

};

function validateProduct(productID) {
    if( /^([0-9]{1,4})$/.test(productID)) {
        var productIdNumber = parseInt(productID.match(/\d+/g)[0])
        return (productIdNumber <= maxProductNumber) 
    }

    return false
}

function generateURL(productID) {
    values = window.location.href.split("/")
    baseUrl = window.location.href.replace(values[values.length-1],"") 
    return baseUrl + "product-" + normalizeProductID(productID) + ".html"
}

function normalizeProductID(productID) {
    if(productID.length > 4) {
        return productID
    }

    return  productID.padStart(4, '0')
}

