(function() {
      "use strict";
      var images=["Ax.webp", "Photi.jpg","Pho.jpg"];
             var initial=0;
             var x=document.getElementById('next');
             x.addEventListener("click",function(){
                  initial++;
                  if(initial>images.length-1){
                        initial=0;
                  }
                  document.getElementById("myimage").src=images[initial];
             });
             //Previous
             const y=document.getElementById('prev');
             y.addEventListener("click",function(){
                  initial--;
                  if(initial<0){
                        initial=images.length-1;
                  }
                  document.getElementById("myimage").src=images[initial];
             });
})();