let rows = "";
for(var i = 0;i < 8;i++){
    rows += 
    `
        <div class="col-lg-3 col-md-4 mb-4">
            <div class="product-list">
                <div class="product-card">
                    <a href="product-details.html?id=${products[i].id}" class="product-thumb">
                        <img src="${products[i].path}" alt="image_not_found">
                    </a>
                    <div class="product-content">
                        <h4><a href="product-details.html" class="product-title">
                            ${products[i].title}
                        </a></h4>
                    </div>
                </div>
            </div>
        </div>
    `
}

document.getElementById("homeProducts").innerHTML=rows;