var cliqueImagem = 1;

    window.onload = function(){
        endpointRecurso    = new EndpointConsultaRecurso();
        endpointPersonagem = new EndpointPersonagem();
        endpointFilme      = new EndPointFilmes();
        endpointNave       = new EndPointNaves();
        endpointVeiculo    = new EndPointVeiculos();
        endPointEspecie    = new EndPointEspecies();
        eventoProximaImagem();
        eventoLinks();        

    }


    function eventoLinks(){
        let links = document.querySelectorAll("a");
        links.forEach(vlr =>{
            vlr.addEventListener('click', e =>{
                limparBackgroundCorpoPagina();
                chamaEndpoint(vlr.id);
            });
        });
    }

    function chamaEndpoint(link){

        switch (link) {
            case "consultaTodos": 
                 endpointRecurso.consultaRecurso();
                 break;
            case "consultaPersonagens": 
                 endpointPersonagem.consultaPersonagens();
                 break; 
            case "consultaFilmes": 
                 endpointFilme.consultaFilmes();
                 break; 
            case "consultaNaves": 
                 endpointNave.consultaNaves();
                 break;     
            case "consultaveiculos": 
                 endpointVeiculo.consultaVeiculos();
                 break;   
            case "consultaEspecies": 
                 endPointEspecie.consultaEspecies();
                 break;                                                                                 
        
            default:
                break;
        }

    }

    function limparBackgroundCorpoPagina(){
        document.querySelector("#corpo").style.backgroundImage = "none";
        $("table").empty();
        document.querySelector("table").style.display = "table";
    }

    function eventoProximaImagem(){

    
        let proximaImage = document.getElementById("imgProxima");

        proximaImage.addEventListener('click', e =>{

            mudaImagem();

        });

    }


    function mudaImagem(){
        $("table").empty().css("display","none");        
        let imageNext = document.getElementById("corpo");

        switch (cliqueImagem) {
            case 1:
                imageNext.style.backgroundImage =  "url('img/nave2.png')";
                cliqueImagem++;                                  
                break;
            case 2:
                imageNext.style.backgroundImage =  "url('img/nave3.png')";
                cliqueImagem++;                                  
                break;
            case 3:
                imageNext.style.backgroundImage =  "url('img/nave4.png')";
                cliqueImagem++;                                  
                break;
            case 4:
                imageNext.style.backgroundImage =  "url('img/nave.png')";
                cliqueImagem = 1;                                  
                break;                                            
        }
    }
