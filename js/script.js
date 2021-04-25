var cliqueImagem = 1;

    window.onload = function(){
        endpointRecurso      = new EndpointConsultaRecurso();
        endpointPersonagem   = new EndpointPersonagem();
        endpointFilme        = new EndPointFilmes();
        endpointPlaneta      = new EndPointPlanetas();
        endpointVeiculo      = new EndPointVeiculos();
        endPointEspecie      = new EndPointEspecies();
        endPointNaveEstrelar = new EndPointNavesEstrelares();
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
        IncluirNomeNaves(""); 
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
            case "consultaPlanetas": 
                  endpointPlaneta.consultaPlanetas();
                 break;     
            case "consultaveiculos": 
                 endpointVeiculo.consultaVeiculos();
                 break;   
            case "consultaEspecies": 
                 endPointEspecie.consultaEspecies();
                 break;      
            case "consultaNaves": 
                 endPointNaveEstrelar.consultaNavesEstrelares();
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
                imageNext.style.backgroundImage =  "url('img/cr90.png')";
                IncluirNomeNaves("CR90 corvette");                
                cliqueImagem++;                                  
                break;
            case 2:
                imageNext.style.backgroundImage =  "url('img/Star Destroyer.png')";
                IncluirNomeNaves("Star Destroyer"); 
                cliqueImagem++;                                  
                break;
            case 3:
                imageNext.style.backgroundImage =  "url('img/Y-wing.png')";
                IncluirNomeNaves("Y-wing"); 
                cliqueImagem++;                                  
                break;
            case 4:
                imageNext.style.backgroundImage =  "url('img/nave.png')";
                IncluirNomeNaves("Millennium Falcon");
                cliqueImagem = 1;                                  
                break;                                            
        }
    }

    function IncluirNomeNaves(texto){
        $("span").empty();
        let text = document.createElement("span");
        text.innerHTML = texto;
        let vlr =  document.querySelector("#corpo").appendChild(text).style.color="white";
        $("span").css("font-size","60px").css("position","relative").css("top","460px").css("font-family","Calibri");
    }
