var input = document.getElementsByTagName("input");
var select = document.getElementById('lang');
var form = document.getElementById('form')[0];
var tab = document.querySelector("table>tbody");
var lst = [];

var validation =0;
function valider(){
    for(i=0; i<input.length-4;i++){
        if(input[i].value==''){
          input[i].nextElementSibling.innerHTML = "entre un formation";
          input[i].nextElementSibling.style.color = "red";
            validation ++;
        }
        else{
          input[i].nextElementSibling.innerHTML ="valide";
          input[i].nextElementSibling.style.color="green";
        }
      }
        //titre validation
        if(input[0].value.length>30){
          input[0].nextElementSibling.innerHTML="entre un nom moins de 30 letre"
          input[0].nextElementSibling.style.color="red"
        }

        //auteur validation

        if(input[1].value.length>20){
          input[1].nextElementSibling.innerHTML="entre un nom moins de 20 letre"
          input[1].nextElementSibling.style.color="red"
        }
        //price validation

        var reg_price = /^[0-9]+((.[0-9]{2})|())$/;

        if(reg_price.test(input[2].value)){
          input[2].nextElementSibling.innerHTML=" valid   "
          input[2].nextElementSibling.style.color="green"
        }
        else{
          input[2].nextElementSibling.innerHTML="no valid "
          input[2].nextElementSibling.style.color="red"
        }
        //email validation
        var email = document.getElementById("email");
        var emailpara = document.getElementById("emailpara");
        email.onkeydown = function(){
          const emailv =/^(((\w+)(.)(\w+))|((\w+)))(@)(\w+)(.)(\w+)$/;
          if(emailv.test(email.value)){
            emailpara.innerText="valid";
            emailpara.style.color="green"
          }
          else{
            input[2].nextElementSibling.innerHTML=" no valide"
            input[2].nextElementSibling.style.color="red"
          }
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







