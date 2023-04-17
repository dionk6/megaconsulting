let rows2 = "";
for(var i = 0;i < products.length;i++){
    rows2 += 
    `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="product-card">
                <a href="product-details.html?id=${products[i].id}" class="product-thumb">
                    <img src="${products[i].path}" alt="image_not_found">
                </a>
                <div class="product-content">
                    <h4><a href="product-details.html?id=${products[i].id}" class="product-title"> ${products[i].title}</a></h4>
                </div>
            </div>
        </div>
    `
}

document.getElementById("mainProducts").innerHTML=rows2;