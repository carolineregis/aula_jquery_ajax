
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" +cep+ "/json"; 
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log (response);
             $('#cep').html(response.cep);
             $('#city').html(response.localidade);
             $('#uf').html(response.uf);
             $('#bairro').html(response.bairro);
             $('#street').html(response.logradouro);
        }
    })
}