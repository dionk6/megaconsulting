let products =
[
    {
        id: 1,
        path: "assets/images/megaproducts/1.jpg",
        title: "Roof Hook Double Adjustable Hybrid"
    },
    {
        id: 3,
        path: "assets/images/megaproducts/3.jpg",
        title: "L-Profile 40x40x3MM 6,00M ALU"
    },
    {
        id: 4,
        path: "assets/images/megaproducts/4.jpg",
        title: "Roof Hook Double Adjustable Stainless Steel"
    }
];

let rows = "";
for(var i = 0;i < products.length;i++){
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