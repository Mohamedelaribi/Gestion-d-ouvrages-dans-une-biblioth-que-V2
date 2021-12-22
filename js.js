var input = document.getElementsByTagName("input")
var select = document.getElementsByName("language") 
var type = document.getElementsByName("type")
var lst = [];


class Ouvrage{
    constructor(titre,auteur,prix,email,date,language,type){
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.email = email;
        this.date = date;
        this.language = language;
        this.type = type;
    }
    détailOuvrage()
{    return "L'ouvrage "+this.ouvrage+" est un "+this.type+" en langue "+this.language+" écrit par "+this.auteur+" et publié le "+this.date+" le prix de "+this.titre+" est de "+this.prix;
}    
}
var tab = document.querySelector("table>tbody");
function add(){
    let ouv = new Ouvrage(input[0].value,input[1].value,input[2].value,input[3].value,input[4].value,select.value,type.value);
    console.log(ouv.détailOuvrage());
    lst.push(ouv);
    var tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${ouv.title}</td>
    <td>${ouv.auteur}</td>
    <td>${ouv.prix}</td>
    <td>${ouv.email}</td>
    <td>${ouv.date}</td>
    <td>${ouv.language}</td>
    <td>${ouv.type}</td>`;
            
    tab.appendChild(tr)
}

