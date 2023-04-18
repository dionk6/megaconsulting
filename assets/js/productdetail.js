const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

let obj = products.filter(x => x.id == id)[0];

let titleHolders = document.getElementsByClassName("title-holder");

for(var i = 0;i < titleHolders.length;i++){
    titleHolders[i].innerText = obj.title;
}

let imgTag = 
`
    <img src="${obj.path}" alt="image_not_found">
`

document.getElementById("image-holder").innerHTML = imgTag;