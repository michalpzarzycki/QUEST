//BAZA PYTAN
var pytanie = new Array;
var odpowiedzi = new Array;
var numer;
var punkty=1;
var wyniki = new Array;
var sprawdzenie = new Array;
var porazka=0;
var koniec="";
 var lolek = 0;
pytanie[0]="Jakiej narodowości jest zawodnik MMA Conor McGregor";
pytanie[1]="Jak nazywał się największy czarny charakter z serialu \"Plebania\"?";
pytanie[2]="Słynna katastrowa samolotu prezydenckiego w smoleńsku miała miejsce 10 kwietni 2010. Który to był dzień tygodnia?";
pytanie[3]="W którym najbliższym roku będziemy mieli 29-cio dniowy luty?";
pytanie[4]="Skala Richtera kończy się na:"; 
pytanie[5]="\"A\" jest: "; 
pytanie[6]="Kto zagrał rolę Krashana Bhamaradżangi w serialu pt. \"Zmiennicy\"?";  
pytanie[7]="Tesla to auto, które zyskało sławę między innymi ze względu na napęd:";  
pytanie[8]="Jaką literą w fizyce oznaczamy siłę?";   
pytanie[9]="W zawodach wędkarskich, rzutu spinningiem nie można oddać: "; 
pytanie[10]="Ktora część \"Dziadów\" Adama Mickiewicza nie istnieje, bądź też istnieje tylko w krótkich fragmentach rękopiśmiennych?"; 
pytanie[11]="Jakie zwierzę jest symbolem systemu operacyjnego Linux?"; 
pytanie[12]="Do liniowców typu \"Olympic\" nie należał statek:"; 
pytanie[13]="Piłkarzem roku FIFA w 2009 roku został: ";  
pytanie[14]="Polacy nie są najliczniejszą mniejszością narodową w: "; 
pytanie[15]="Która odmiana głosu nie jest odmianą mezzosopranu?";  
pytanie[16]="Z jakiego kraju pochodzą klocki LEGO?"; 
pytanie[17]="Jeśli znajdowałbyś się na zerowym punkcie szerokości i wysokości geograficznej, to w którym miejscu by to było?"; 
pytanie[18]="Który z kątów nie jest płaski?";  
pytanie[19]="Alfred Mosher Butts w 1931 wynalazł grę: ";  
pytanie[20]="W którym roku po raz ostatni wykonano wyrok kary śmierci w Polsce?";  
pytanie[21]="Kto był wokalistą zespołu The Doors";  
pytanie[22]="Ile stopni wykona minutowa wskazówka jeśli minęło 3,5 goddziny?"; 
pytanie[23]="Czyją śmierć opłakiwał Jan Kochanowski w trenach?";  
pytanie[24]="Jaka jest maksymalna kara ograniczenia wolności za popełnienie wykroczenia?";
pytanie[25]="Jak powinno się przetłumaczyć angielskie słowo \"preservative\"?";  
pytanie[26]="Flaga którego stanu USA ma przekąrne koloru bordowego na białym tle?"; 
pytanie[27]="W jakim miejscu znajduje się ściana płaczu?";  
pytanie[28]="W którym roku nastąpił I rozbiór Polski?";  


sprawdzenie[0]=0;
sprawdzenie[1]=0;
sprawdzenie[2]=0;
sprawdzenie[3]=0;
sprawdzenie[4]=0;
sprawdzenie[5]=0;
sprawdzenie[6]=0;
sprawdzenie[7]=0;
sprawdzenie[8]=0;
sprawdzenie[9]=0;
sprawdzenie[10]=0;
sprawdzenie[11]=0;
sprawdzenie[12]=0;
sprawdzenie[13]=0;
sprawdzenie[14]=0;
sprawdzenie[15]=0;
sprawdzenie[16]=0;
sprawdzenie[17]=0;
sprawdzenie[18]=0;
sprawdzenie[19]=0;
sprawdzenie[20]=0;
sprawdzenie[21]=0;
sprawdzenie[22]=0;
sprawdzenie[23]=0;
sprawdzenie[24]=0;
sprawdzenie[25]=0;
sprawdzenie[26]=0;
sprawdzenie[27]=0;
sprawdzenie[28]=0;

odpowiedzi[0]="Jest Irlandczykiem";
odpowiedzi[1]="Jest Szkotem";
odpowiedzi[2]="Jest Amerykaninem";
odpowiedzi[3]="Jest Australiczykiem";

odpowiedzi[4]="Ksiądz Adam";
odpowiedzi[5]="Janusz Tracz";
odpowiedzi[6]="Jurek Tosiek";
odpowiedzi[7]="\"Rumcajs\"";

odpowiedzi[8]="Piatek";
odpowiedzi[9]="Sobota";
odpowiedzi[10]="Niedziela";
odpowiedzi[11]="Poniedziałek";

odpowiedzi[12]="2022";
odpowiedzi[13]="2021";
odpowiedzi[14]="2023";
odpowiedzi[15]="2020";

odpowiedzi[16]="nie ma końca";
odpowiedzi[17]="12";
odpowiedzi[18]="18";
odpowiedzi[19]="10";

odpowiedzi[20]="spółgłoską dźwięczną";
odpowiedzi[21]="samogłoską nosową";
odpowiedzi[22]="społgloska bezdźwięczną";
odpowiedzi[23]="samogłoską ustną";

odpowiedzi[24]="Bronisław Pawlik";
odpowiedzi[25]="Krzysztof Kowalewski";
odpowiedzi[26]="Piotr Pręgowski";
odpowiedzi[27]="Kazimierz Kaczor";

odpowiedzi[28]="spalinowy"; 
odpowiedzi[29]="atomowy";
odpowiedzi[30]="wodorowy";
odpowiedzi[31]="elektryczny";

odpowiedzi[32]="F";
odpowiedzi[33]="W";
odpowiedzi[34]="C";
odpowiedzi[35]="S";

odpowiedzi[36]="z brzegu";  
odpowiedzi[37]="z kajaka";
odpowiedzi[38]="na boisku";
odpowiedzi[39]="z łódki";

odpowiedzi[40]="druga"; 
odpowiedzi[41]="czwarta";
odpowiedzi[42]="pierwsza";
odpowiedzi[43]="trzecia";

odpowiedzi[44]="kot";  
odpowiedzi[45]="puma";
odpowiedzi[46]="orzeł";
odpowiedzi[47]="pingwin";

odpowiedzi[48]="Mauretania";
odpowiedzi[49]="Titanic";
odpowiedzi[50]="Olympic";
odpowiedzi[51]="Wild Orchid";

odpowiedzi[52]="Fernando Torres";  
odpowiedzi[53]="Lionel Messi";
odpowiedzi[54]="Cristiano Ronaldo";
odpowiedzi[55]="Kaka";

odpowiedzi[56]="Islandii";
odpowiedzi[57]="Norwegii";
odpowiedzi[58]="Anglii";
odpowiedzi[59]="Irlandii";

odpowiedzi[60]="koloraturowy"; 
odpowiedzi[61]="liryczny";
odpowiedzi[62]="dramatyczny";
odpowiedzi[63]="harmonijny";

odpowiedzi[64]="z Danii";
odpowiedzi[65]="z Niemczech";
odpowiedzi[66]="z Węgrzech";
odpowiedzi[67]="z USA";

odpowiedzi[68]="w Ghanie";  
odpowiedzi[69]="na Oceanie Atlantyckim";
odpowiedzi[70]="na Oceanie Spokojnym";
odpowiedzi[71]="w Greenwich";

odpowiedzi[72]="rozwarty";  
odpowiedzi[73]="pelny";
odpowiedzi[74]="dwuścienny";
odpowiedzi[75]="skierowany";

odpowiedzi[76]="Monopoly";   
odpowiedzi[77]="Warcaby";
odpowiedzi[78]="Szachy";
odpowiedzi[79]="Scrabble";

odpowiedzi[80]="1988";
odpowiedzi[81]="1994";
odpowiedzi[82]="1982";
odpowiedzi[83]="1976";

odpowiedzi[84]="Jimi Hendrix";  
odpowiedzi[85]="Jim Morrison";
odpowiedzi[86]="Elvis Presley";
odpowiedzi[87]="Eric Clapton";

odpowiedzi[88]="1080";   
odpowiedzi[89]="1220";
odpowiedzi[90]="1260";
odpowiedzi[91]="900";

odpowiedzi[92]="siostry";  
odpowiedzi[93]="przyjaciółki";
odpowiedzi[94]="żony";
odpowiedzi[95]="córki";

odpowiedzi[96]="1 miesiąc";
odpowiedzi[97]="2 miesiące";
odpowiedzi[98]="3 miesiące";
odpowiedzi[99]="6 miesięcy";

odpowiedzi[100]="antykoncepcja";   
odpowiedzi[101]="konserwant";
odpowiedzi[102]="rezerwacja";
odpowiedzi[103]="dezynfekcja";

odpowiedzi[104]="arkanas";   
odpowiedzi[105]="arizony";
odpowiedzi[106]="alabamy";
odpowiedzi[107]="alaski";

odpowiedzi[108]="w Pekinie";
odpowiedzi[109]="w Bombaju";
odpowiedzi[110]="w Rzymie";
odpowiedzi[111]="w Jerozolimie";

odpowiedzi[112]="1772";
odpowiedzi[113]="1769";
odpowiedzi[114]="1778";
odpowiedzi[115]="1784";



function zmianaObrazka(punkty) {
    
    document.getElementById("gif").innerHTML='<img src="' + punkty + '.jpg ">';
} 

function komentarz(punkty){
    
    if(punkty===0) document.getElementById("comment").innerHTML="1aaaa";
     else if(punkty===1) document.getElementById("comment").innerHTML="lololo";
    else if(punkty===2) document.getElementById("comment").innerHTML="Pierwsze koty za płoty!";
    else if(punkty===3) document.getElementById("comment").innerHTML="Dobra, nie udawaj mądrego, kończmy to. :D";
    else if(punkty===4) document.getElementById("comment").innerHTML="Głupi to ma zawsze szczęście!";
    else if(punkty===5) document.getElementById("comment").innerHTML="Czy ty chcesz mi zaimponować?";
    else if(punkty===6) document.getElementById("comment").innerHTML="Halo! Policja! Prosze przyjechać do internetów!";
    else if(punkty===7) document.getElementById("comment").innerHTML="Zgłaszam sprawę do prokuratury.";
    else if(punkty===8) document.getElementById("comment").innerHTML="No ile jeszcze tego farta, no!";
    else if(punkty===9) document.getElementById("comment").innerHTML="Od kiedy ameby są takie ambitne?";
    else if(punkty===10) document.getElementById("comment").innerHTML="Dzwonili z wariatkowa, musisz już wracać...";
    else if(punkty===11) document.getElementById("comment").innerHTML="Inteligencja głowonoga to maks co może z Ciebie być...";
    else if(punkty===12) document.getElementById("comment").innerHTML="W moich stronach takim jak Ty zakładali homonto i orano nimi pole!";
    else if(punkty===13) document.getElementById("comment").innerHTML="Wodogłowie to jeszcze nie inteligencja...";
    else if(punkty===14) document.getElementById("comment").innerHTML="Daj sobie spokój, po co Ci to upokorzenie...";
    else if(punkty===15) document.getElementById("comment").innerHTML="Ty się nadajesz...";
    else if(punkty===16) document.getElementById("comment").innerHTML="...do tarcia chrzanu...";
    else if(punkty===17) document.getElementById("comment").innerHTML="... i pchania karuzeli.";
    else if(punkty===18) document.getElementById("comment").innerHTML="...";
    else if(punkty===19) document.getElementById("comment").innerHTML="Elektorat pisu nigdy nie zaszedł tak wysoko";
    else if(punkty===20) document.getElementById("comment").innerHTML="chyba mamy jakąś awarie systemu";
    else if(punkty===21) document.getElementById("comment").innerHTML="no co jest...";
    else if(punkty===22) document.getElementById("comment").innerHTML="nie możliwe..";
    else if(punkty===23) document.getElementById("comment").innerHTML="...";
    else if(punkty===24) document.getElementById("comment").innerHTML="GRATULACJE!!!";
    
}

function reset(punkty) {
    for(i=0; i<punkty; i++){
        var jot=(i+1);
        var pole1 = document.getElementById("s"+jot);
          pole1.style.backgroundColor="#06073B";
        
    }}

function zmianaBarw(punkty) {
    var pole=document.getElementById("s"+punkty);
    pole.style.backgroundColor="white";
    
    if(punkty>0){
        var ka = (punkty-1);
        var pole=document.getElementById("s"+ka);
    pole.style.backgroundColor="green";
        
    }
        
    
} 



function Pytanie() { 
    
    if(lolek===0){
      var pole3 = document.getElementById("s1");
          pole3.style.backgroundColor="white";
    lolek++;}
    
        numer=Math.floor(Math.random()*28);
     
    
    
    if(sprawdzenie[numer]===0){
    document.getElementById("question").innerHTML=pytanie[numer];
    for(i=0; i<4; i++){
    document.getElementById(i+1).innerHTML=odpowiedzi[(4*numer)+i];
    }}
    else Pytanie();
    
    sprawdzenie[numer]++;
}






function sprawdzOdpowiedz(nr) {
    
    
    if((numer==0 || numer==4 || numer==8 || numer==12 || numer==16 || numer==20 || numer==24 || numer==28  )&& nr==1)   {
       komentarz(punkty);
        zmianaObrazka(punkty);
        punkty++;
        Pytanie();
        zmianaBarw(punkty);
              
       
    //    document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                      
                                                      }
    else if((numer==1 || numer==5 || numer==9 || numer==13 || numer==17 || numer==21 || numer==25 ) && nr==2)   {
      komentarz(punkty);
        zmianaObrazka(punkty);
        punkty++;
        Pytanie();
        zmianaBarw(punkty);
                
       
      //  document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                           }
    else if((numer==2 || numer==6 || numer==10 || numer==14 || numer==18 || numer==22 || numer==26) && nr==3)   {
        komentarz(punkty);
        zmianaObrazka(punkty);
        punkty++;
        Pytanie();
        zmianaBarw(punkty);
                
        //document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                            
                                                            }
    else if((numer==3 || numer==7 || numer==11 || numer==15 || numer==19 || numer==23 || numer==27) && nr==4)   {
     komentarz(punkty);
        zmianaObrazka(punkty);
        punkty++;
        Pytanie();
        zmianaBarw(punkty);
               
        //document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                            }
    else {
         alert("PRZEGRAŁEŚ "+ punkty);
          porazka++;
          reset(punkty);

         for(i=0; i<28; i++) sprawdzenie[i]=0;
          
    
    punkty=0;}
        
    
    
  
   
    
}




































