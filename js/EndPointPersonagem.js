class EndpointPersonagem{

    consultaPersonagens(){

        $.ajax({

            url: "https://swapi.dev/api/people/?format=json",
            type : "GET",
            success: function(response){

                let head = document.createElement("thead");
                head.innerHTML = `<tr>
                                    <td>Nome</td>
                                    <td>Altura</td>
                                    <td>Massa</td>
                                    <td>Cor do cabelo</td>
                                    <td>Cor da pele</td>
                                    <td>Cor dos olhos</td>
                                    <td>Ano do nascimento</td>
                                    <td>Sexo</td>                                                                        
                                  </tr>
                                    `
                document.querySelector("table").appendChild(head);
                $("table").css("position","absolute").css("left","440px").css("top","150px");                                
                response.results.forEach(element => {                                        
                    let body = document.createElement("tbody");
                    body.innerHTML = `                
                                <tr>
                                    <td>${element.name}</td><td>${element.height}</td><td>${element.mass}</td>
                                    <td>${element.hair_color}</td><td>${element.skin_color}</td><td>${element.eye_color}</td>
                                    <td>${element.birth_year}</td><td>${element.gender}</td>
                                </tr>    
                    `
                    document.querySelector("table").appendChild(body);
                });

            }
        });



    }










}