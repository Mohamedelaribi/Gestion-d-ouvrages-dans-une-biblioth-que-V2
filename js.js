var input = document.getElementsByTagName("input")
var select = document.getElementById('lang')
var type ;
var lst = [];


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
var tab = document.querySelector("table>tbody");
function add(){
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

