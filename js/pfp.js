function httpGet(theUrl)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



// noinspection JSUnresolvedFunction
let pfp = function(){
    let mogus = httpGet("https://discordid.eu/api?key=did_BGE2SMMVa5M73qTLHB2FIXGuARgMPJI5niwmemGSoZsQeMCcNZyl4iAdlNqz&id=784101881567379456");
    let jsonParsed = JSON.parse(mogus);
    $("img.boofipfp").attr("src", jsonParsed.avatar);
    $("#trollec").text(jsonParsed.usernamewtag);

    var randomnum = Math.floor(Math.random() * 5);
    let slejsa = function(){   
        console.log(randomnum)
        switch(randomnum){
case 0: 
$("img.slejsapfp").attr("src", "slejsik.png");
console.log("set0");
break;
case 1:
$("img.slejsapfp").attr("src", "slejsik1.png");
console.log("set1");
break;
case 2:
$("img.slejsapfp").attr("src", "slejsik2.png");
console.log("set2");
break;
case 3:
$("img.slejsapfp").attr("src", "slejsik3.png");
console.log("set3");
break;
case 4:
$("img.slejsapfp").attr("src", "slejsik4.png");
console.log("set4");
break;
        }   
    }
    slejsa();
}