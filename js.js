var input = document.getElementsByTagName("input");
var select = document.getElementById('lang');
var form = document.getElementById('form')[0];
var tab = document.querySelector("table>tbody");
var lst = [];

var validation =0;
function valider(){
    for(i=0; i<input.length;i++){
        if(input[i].value==''){
          input[i].nextElementSibling.innerHTML = "This fieled required";
          input[i].nextElementSibling.style.color = "red";
            validation ++;
        }
        else{
          input[i].nextElementSibling.innerHTML ="well";
          input[i].nextElementSibling.style.color="green";
          input[i].style.borderColor="green";
        }
      }
        //bookname validation
        if(input[0].value.length>30){
          input[0].nextElementSibling.innerHTML="the name should be less than 30 letter"
          input[0].nextElementSibling.style.color="red"
        }
  
        //author validation
  
        if(input[1].value.length>20){
          input[1].nextElementSibling.innerHTML="the name should be less than 20 letter"
          input[1].nextElementSibling.style.color="red"
        }
        //price validation
  
        var reg_price = /^[0-9]+((.[0-9]{2})|())$/;
  
        if(reg_price.test(input[2].value)){
          input[2].nextElementSibling.innerHTML="enter the price with number"
          input[2].nextElementSibling.style.color="red"
        }
        else{
          input[2].nextElementSibling.innerHTML="WELL"
          input[2].nextElementSibling.style.color="GREEN"
        }
  
        let ouv = new Ouvrage(input[0].value,input[1].value,input[2].value,input[3].value,input[4].value,document.querySelector("input[type='radio']:checked").value,select.value);
        console.log(lst);
        lst.push(ouv);
        var tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${ouv.titre}</td>
        <td>${ouv.auteur}</td>
        <td>${ouv.prix}</td>
        <td>${ouv.email}</td>
        <td>${ouv.date}</td>
        <td>${ouv.language}</td>
        <td>${ouv.type}</td>`;
                
        tab.appendChild(tr)
  
        if(isNaN(Number(input[2].value))){
  
         input[2].nextElementSibling.innerHTML="enter the price with number"
        input[2].nextElementSibling.style.color="red"
         }
        else if (Number(inputs[2].value<0)){
          input[2].nextElementSibling.innerHTML="positive number"
          input[2].nextElementSibling.style.color="red" 
            }
         
  
  
  
  }




class Ouvrage{
    constructor(titre,auteur,prix,email,date,type,language,){
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.email = email;
        this.date = date;
        this.type = type;
        this.language = language;
     
    }
    détailOuvrage()
{    return "L'ouvrage "+this.ouvrage+" est un "+this.type+" en langue "+this.language+" écrit par "+this.auteur+" et publié le "+this.date+" le prix de "+this.titre+" est de "+this.prix;
}    
}





