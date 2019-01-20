


    // funckja dodaje punkt przeciwnikowi
var pktDlaCiebie = 1;
var pktDlaPrzeciw = 0;

 var suma = 0;
function pkt(){
  
    if(pktDlaPrzeciw == 1){
        suma++;
        document.getElementById("wynik-przeciwnik").innerHTML = suma;
          if(suma == 10){
                 suma = 0;
            suma2 = 0;
            remis = 0;
                document.getElementById("wynik").innerHTML = suma;
                document.getElementById("remis").innerHTML = remis;
                document.getElementById("wynik-przeciwnik").innerHTML = suma2;
            console.log("Przegrales cala gre");
            window.alert("Przegrales!");
         
        }
    }
   }
/////////

/// pkt dla ciebie
var suma2 = 0;
function pkt2(){
    if(pktDlaCiebie == 0){
        suma2++;
        document.getElementById("wynik").innerHTML = suma2;
        if(suma2 == 10){
                     suma = 0;
            suma2 = 0;
            remis = 0;
             document.getElementById("wynik").innerHTML = suma;
                document.getElementById("remis").innerHTML = remis;
                document.getElementById("wynik-przeciwnik").innerHTML = suma2;
            console.log("wygrales cala gre ");
            window.alert("wygrales!");
        }
    }
}
///remisy
var remisowepktt = 0;
var remis = 0;
function remisowe(){
    if(remisowepktt == 2){
        remis++;
        document.getElementById("remis").innerHTML = remis;
        
     
    }
}
/// gramy do 10 wiec musi sie resetowac
// to co wybral komputer
var dokamienia =  document.getElementById("kamien");
var donozyc = document.getElementById("noz");
var dopapieru = document.getElementById("papier");
/*
function computer(){
    if(random() == 1){
     
    dokamienia.style.backgroundColor = "yellow";
    }else if(random() == 2){
        donozyc.style.backgroundColor = "yellow";
    }else if(random() == 3){
        dopapieru.style.backgroundColor = "yellow";
    }
}
*/
var kamien = 1;
var noz = 2;
var papier = 3;



document.getElementById("noz").addEventListener("click", function(){
var liczba = Math.floor(Math.random()*3) + 1;
    console.log(liczba);
 
  if (liczba == 1){
      pktDlaPrzeciw = 1;
      pkt();
       console.log("przegrales");
        dokamienia.style.backgroundColor = "yellow";
      
  }else if (liczba == 3){
      console.log("Wygrales");
      pktDlaCiebie = 0;
      pkt2();
         dopapieru.style.backgroundColor = "yellow";
  }
    else if (liczba == 2){
        console.log("remis");
        remisowepktt = 2;
        remisowe();
           donozyc.style.backgroundColor = "yellow";
        
    }
    
    setTimeout( function(){
 donozyc.style.backgroundColor = "gray";
  dokamienia.style.backgroundColor = "gray";
        dopapieru.style.backgroundColor = "gray";
 
},2000);
});

document.getElementById("papier").addEventListener("click", function(){
    
    var liczba = Math.floor(Math.random()*3) + 1;
    console.log(liczba);
    
    
  if (liczba == 1 ){
      console.log("wygrales");
       pktDlaCiebie = 0;
      pkt2();
      dokamienia.style.backgroundColor = "yellow";
      
  }else if (liczba == 3) {
      console.log("remis");
        remisowepktt = 2;
        remisowe();
        dopapieru.style.backgroundColor = "yellow";
    
  }
    else if(liczba == 2){
        console.log('przegrales');
          pktDlaPrzeciw = 1;
      pkt();
          donozyc.style.backgroundColor = "yellow";
    }
      
    setTimeout( function(){
 donozyc.style.backgroundColor = "gray";
  dokamienia.style.backgroundColor = "gray";
        dopapieru.style.backgroundColor = "gray";
 
},2000);
});

document.getElementById("kamien").addEventListener("click", function(){
    
    var liczba = Math.floor(Math.random()*3) + 1;
    console.log(liczba);
    
      if (liczba == 3){
      console.log("przegralem");
            pktDlaPrzeciw = 1;
      pkt();
          
            dopapieru.style.backgroundColor = "yellow";
      
  }else if(liczba == 2){
      console.log("wygrales");
       pktDlaCiebie = 0;
      pkt2();
       donozyc.style.backgroundColor = "yellow";
   
  }
    else if(liczba == 1){
        console.log("remis");
          remisowepktt = 2;
        remisowe();
         dokamienia.style.backgroundColor = "yellow";
    }
      
    setTimeout( function(){
 donozyc.style.backgroundColor = "gray";
  dokamienia.style.backgroundColor = "gray";
        dopapieru.style.backgroundColor = "gray";
 
},2000);
  
});


