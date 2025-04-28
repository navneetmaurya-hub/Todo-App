 let btn=document.querySelector("button");
 let inp=document.querySelector("input");
 btn.addEventListener("click",function(){
    const para = document.createElement("li");
    const ram=document.createElement("button");
    var x=document.querySelector("input").value;
    para.innerText=x;
    inp.value="";
    document.querySelector("ul").appendChild(para);
    para.appendChild(ram);
   ram.innerHTML="delete";
   ram.style.color="red";
   ram.addEventListener("click",function(){
      document.querySelector("ul").removeChild(para);
   });
 }); 