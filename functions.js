function sendResult(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var result = parseInt(a)+parseInt(b);
  //console.log(Number(a),"  ***  ",parseInt(b),"  ***  ",result);
  document.getElementById("result").innerHTML=result;
}