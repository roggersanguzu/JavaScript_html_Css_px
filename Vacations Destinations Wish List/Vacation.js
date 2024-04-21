var detailsForm=document.querySelector('#destination_detail_form');
detailsForm.addEventListener('submit',handleFormSubmit);

function handleFormSubmit(event){
      event.preventDefault();
      var destName=event.target.elements['name'].value;
      var destLocation=event.target.elements['location'].value;
      var destPhoto=event.target.elements['photo'].value;
      var destDesc=event.target.elements['description'].value;

      for(i=0;i<detailsForm.length;i++){
            detailsForm.elements[i].value="";
      }

      //I was Using this Section to creat a Card

      var wishListContainer=document.getElementById('title');
      if(wishListContainer.children.length==0){
            document.getElementById('title').innerHTML="My Wish List";
      }
} 

function createDestination(name,location,photo,desc){
var card= document.createElement(div);
card.className="card";

var img= document.createElement('img');
img.setAttribute('alt',name);

var constantPotoUrl="image.png";

if(photo.length==0){
      img.setAttribute('src',constantPotoUrl);
}else{
      img.setAttribute('src',photo);
}

var cardBody= document.createElement('div');
cardBody.className="card-body";

cardTitle=document.createElement("h3");
cardTitle.innerText=name;
cardBody.appendChild(cardTitle);

var cardSubtitle=document.createElement("h4");
cardSubtitle.innerText=location;
cardBody.appendChild(cardSubtitle);

if(description.length !==0){
      var cardText=document.createElement("p");
      cardText.className="card-text";
      cardText.innerText=description;
      cardBody.appendChild(cardText);
}

var cardDeletion=document.createElement("button");
cardDeletion.innerText="remove";

cardDeletion.addEventListener("click",removeDestination);
cardBody.appendChild(cardDeletion);

card.appendChild(cardBody);
return card;
}