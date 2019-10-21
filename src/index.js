
import '../node_modules/assets/bootstrap/css/bootstrap.min.css'
import '../node_modules/assets/js/theme.js'



//SØGEFELT
const jokeBtn = document.getElementById('searchbutton')
jokeBtn.addEventListener('click', x => {
    
  const searchField = document.getElementById('searchfield').value


})

//CUSTOMER BOX
const addCustomerBtn = document.getElementById('addCustomerButton')
addCustomerBtn.addEventListener('click', x => {
    
  var fornavn = document.getElementById('fornavn').value
  var efternavn = document.getElementById('efternavn').value
  var adresse = document.getElementById('adresse').value
  var hobby = document.getElementById('hobby').value
  var telefon = document.getElementById('telefon').value


  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 44 && this.status == 200){
      document.getElementById("addCustomerStatus").innerHTML = xhttp.responseText;
    }
  }

  xhttp.open("POST", "http://lamseben.dk/CA2/api/person/addPerson/", false);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("firstname="+ fornavn +"&lastname="+ efternavn +"&adresse="+ adresse +"&hobby="+ hobby +"&telefon= "+ telefon+"")
  document.getElementById("addCustomerStatus").innerHTML = xhttp.responseText;
})


//HER ER ALLE FUNKTIONERNE.






