function consultar() {
    var cep = $("#cep").val();
    
    try{
        var url = `https://viacep.com.br/ws/${cep}/json/`;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send(); //A execução do script pára aqui até a requisição retornar do servidor
    
        var json = JSON.parse(xhttp.responseText);
        console.log(json) 
    } catch(e) {
        console.log(e)
    }
   
    $("#endereco").val(json.logradouro);
    $("#bairro").val(json.bairro);
    $("#estado").val(json.uf);
    $("#cidade").val(json.localidade);
    $("#pais").val("Brasil");
}