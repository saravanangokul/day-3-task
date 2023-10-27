// qus:-2
// use the rest countries' APL URL->https://restcountries.com/v3.1/all and the display all the country flags in the console 


var b = new XMLHttpRequest();
b.open("GET","https://restcountries.com/v3.1/all",true)
b.send();
b.onload = function(){
    var data = b.response;
    //console.log(data);
    var result = JSON.parse(data);
    //console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].flag);
    }
}


 //  qus:-3
 //  use the same rest countries and prin all countries names, regions, sub-region and populations


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var a = request.response;
    //console.log(data);
    var result = JSON.parse(a);
    //console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].region,result[i].subregion,result[i].population);
    }
}
