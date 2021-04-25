class EndpointConsultaRecurso{

    consultaRecurso(){
        $("table").empty();
        $.ajax({
            url : "https://swapi.dev/api/?format=json",
            type: "GET",
            success: function(response){ 
              
               /*Create html do cabeçalho da tabela dinamicamente */                
               let head            =  document.createElement("thead");               
               head.innerHTML      = `<tr><td>Descricao</td></tr>`;                               
               document.querySelector("table").appendChild(head);

               /*Create html dp corpo da tabela dinâmicamente*/ 

               let body      = document.createElement("tbody");
               body.innerHTML = `
              
                    <tr>
                        <td>${response.people}</td>
                    <tr> 
                    <tr>
                        <td>${response.planets}</td>
                    <tr> 
                    <tr>
                        <td>${response.films}</td>
                    <tr> 
                    <tr>
                        <td>${response.species}</td>
                    <tr> 
                    <tr>
                        <td>${response.vehicles}</td>
                    <tr>  
                    <tr>
                        <td>${response.starships}</td>
                    <tr>                                                                                                       
              
               `
               document.querySelector("table").appendChild(body);
               $("td").css("font-size","30px");
               $("table").css("position","absolute").css("left","600px");
                             
            }      
        });
    }    


}