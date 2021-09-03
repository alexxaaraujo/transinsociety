document.getElementById("button").addEventListener("click", validaFormulario)

function validaFormulario(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;

  if(nome != "" && email != "" && telefone != ""){
    console.log(nome, email, telefone)
    alert("Prontinho! Você receberá as novidades por email!")
  }else{
    console.log(nome, email, telefone)
    alert("Por favor, preencha todos os campos Nome, E-mail e Telefone!")
}
}