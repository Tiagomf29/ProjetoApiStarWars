class EndPointPlanetas{


    consultaPlanetas(){

        $.ajax({

            url : "https://swapi.dev/api/planets/?format=json",
            type : "GET",
            success : function(response){

                let head = document.createElement("thead");
                head.innerHTML = `
                
                    <tr>
                        <td>Nome</td> <td>Periodo rotação</td> <td>Período orbita</td>
                        <td>diâmetro</td> <td>Clima</td> <td>Gravidade</td>
                        <td>Terreno</td> <td>Agua da superfície</td> <td>População</td>
                    </tr>    

                `
                document.querySelector("table").appendChild(head);
                $("table").css("position","absolute").css("left","440px");

                response.results.forEach(element => {                        
                    
                    let body = document.createElement("tbody");
                    body.innerHTML = `                
                        <tr>
                        <td>${element.name}</td><td>${element.rotation_period}</td><td>${element.orbital_period}</td>
                        <td>${element.diameter}</td><td>${element.climate}</td><td>${element.gravity}</td>
                        <td>${element.terrain}</td><td>${element.surface_water}</td><td>${element.population}</td>
                        </tr>                
                    `
                    document.querySelector("table").appendChild(body);

                });

            }
        });


    }













}