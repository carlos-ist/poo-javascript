/**
 * No objeto ninja crie a propriedade shuriken, com uma quantidade de estrelas ninjas;
 * A cada método do "atirarProjetil" subtraia uma shuriken.
 * Caso os projeteis tenham acabado, o ninja não poderá atirar mais projeteis.
 */

 //console.log("teste");

 function Ninja(nome, idade, estilo, nomeProjetil, quantidadeProjeteis) {
     this.nome = nome; 
     this.idade = idade;
     this.estilo = estilo;
     this.nomeProjetil = nomeProjetil;
     this.quantidadeProjeteis = quantidadeProjeteis;

     this.golpeFinal = function(){
        console.log(`(${this.nome}) - Esse é meu jutsu Secreto, toma!`);
     }

     this.getQuantidadeProjeteis = function  () {
       // console.log(`${this.nome} tem ${quantidadeProjeteis} ${nomeProjetil}(s)`); 
       // console.log(Number(this.quantidadeProjeteis));
        return this.quantidadeProjeteis;
     };

     this.recarregarProjeteis = function (quantidadeProjeteis){
        this.quantidadeProjeteis = this.quantidadeProjeteis + quantidadeProjeteis;
     }
     
     this.atirarProjetil = function () {
        if(this.quantidadeProjeteis!=0){
            console.log(`(${this.nome})- Toma essa ${this.nomeProjetil} !!!`);
            this.quantidadeProjeteis--;
            this.getQuantidadeProjeteis();
        }else{
            console.log(`Os projeteis de ${this.nome} acabaram!!!`);
            return 0;
        }            
     };

     this.rendicao = function (){
         return console.log(`(${this.nome}) - Eu me rendo!`);
     };

     this.vitoria = function () {
         console.log(`(${this.nome}) - Esse é meu estilo ninja de ser!!! Ha hasuhauhsuhuahssa`);
         console.log("");
         return console.log("¡¡¡ " + this.nome + " - Ganhou a Luta !!!");
    };

   };
 
   let naruto= new Ninja("Naruto Uzumaki", 14, "Ninjutsu", "Shuriken",3);
 
   let kakashi= new Ninja("Kakashi", 30, "Ninjutsu", "kunai",2);

   console.log(naruto);
   console.log(kakashi);
/*
   for(let i = naruto.getQuantidadeProjeteis(); i >= 0; i--){
    console.log("Teste "+ i);
    };
*/
//    naruto.recarregarProjeteis(3);
//    kakashi.recarregarProjeteis(2);

    //Fight
    round=0;
    while(naruto.getQuantidadeProjeteis()!==0 || kakashi.getQuantidadeProjeteis() !== 0){
        round++;
        console.log("");
        console.log(`- Round ${round} -`)
        naruto.atirarProjetil();
        kakashi.atirarProjetil();

        if(kakashi.getQuantidadeProjeteis()===0){
            naruto.golpeFinal();
            kakashi.rendicao();
            naruto.vitoria();
            break;
        }

        if(naruto.getQuantidadeProjeteis()===0){
            kakashi.golpeFinal();
            naruto.rendicao();
            kakashi.vitoria();
            break;
        }
    };


