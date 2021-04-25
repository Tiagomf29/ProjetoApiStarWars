class EndPointNavesEstrelares{

    consultaNavesEstrelares(){
        $.ajax({

            url : "http://swapi.dev/api/starships/?format=json",
            type: "GET",
            success : function(response){

                let head = document.createElement("thead");
                head.innerHTML = `
                    <tr>
                        <td>Nome</td><td>Modelo</td><td>Fabricante</td><td>Custo</td>
                        <td>Tamanho</td><td>Velocidade máxima</td><td>Equipe técnica</td><td>Passageiros</td>
                        <td>Capacidade de carga</td><td>Consumiveis</td><td>Classe de veículos</td><td>Pilotos</td>
                    </tr>                    
                `
                document.querySelector("table").appendChild(head);
                $("table").css("position","absolute").css("left","440px");

                response.results.forEach(element => {
                                    
                    let body = document.createElement("tbody");
                    body.innerHTML = `
                    
                            <tr>
                                <td>${element.name}</td><td>${element.model}</td><td>${element.manufacturer}</td><td>${element.cost_in_credits}</td>
                                <td>${element.length}</td><td>${element.max_atmosphering_speed}</td><td>${element.crew}</td><td>${element.passengers}</td>
                                <td>${element.cargo_capacity}</td><td>${element.consumables}</td><td>${element.vehicle_class}</td><td>${element.pilots}</td>
                            </tr>                        
                    `
                    document.querySelector("table").appendChild(body);

                 });

            }
        });
    }

}