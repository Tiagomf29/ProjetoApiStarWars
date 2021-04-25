class EndPointFilmes{


    consultaFilmes(){

        $.ajax({

            url: "https://swapi.dev/api/films/?format=json",
            type: "GET",
            success : function(response){

               let head = document.createElement("thead");
               head.innerHTML = `
                
                    <tr>
                      <td>Título</td><td>Episódio</td><td>Abertura</td><td>Diretor</td>
                      <td >Produtor</td><td>Data Lançamento</td>
                    </tr>  
                
               `
                document.querySelector("table").appendChild(head);                             

                response.results.forEach(element => {
                                    
                    let body = document.createElement("tbody");
                    body.innerHTML = `
                    
                        <tr>
                            <td id="titulo">${element.title}</td><td id="episodio">${element.episode_id}</td><td id="abertura">${element.opening_crawl}</td>
                            <td id="diretor">${element.director}</td><td id="produtor">${element.producer}</td><td id="dtLan">${element.release_date}</td>
                    `
                    document.querySelector("table").appendChild(body);
                    $("table").css("position","absolute").css("left","420px").css("text-align","center");


                });


            }

        });



    }


}