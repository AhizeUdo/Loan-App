// alert ("Welcome Shawtiee");

function calculate(){
  var p = document.getElementById("p").value;
  var n = document.getElementById("n").value;
  var r = document.getElementById("r").value;
  var x = Number(p) * Number(n) * Number(r);
  var y = Number(x) / 100;
  var z = Number(p) + Number(y);
   
  return document.getElementById('result').innerHTML= "Total amount to pay Back:" + Number(z);

  
 
  // document.write ("Intrest on principal amount :"+y);
  // document.write ("Total amount to Pay Back :"+z);
  
}