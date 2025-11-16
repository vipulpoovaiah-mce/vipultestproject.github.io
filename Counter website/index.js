let val=0;

document.getElementById("Counter").textContent = val;

document.getElementById("value_neg2").onclick = function() {
  val-=2;
  document.getElementById("Counter").textContent=val;
  document.getElementById('History_print').innerHTML+="<li>-2</li>";
}
document.getElementById("value_neg1").onclick = function() {
  val-=1;
  document.getElementById("Counter").textContent=val;
  document.getElementById('History_print').innerHTML+="<li>-1</li>";
}
document.getElementById("value_pos1").onclick = function() {
  val+=1;
  document.getElementById("Counter").textContent=val;
  document.getElementById('History_print').innerHTML+="<li>+1</li>";
}
document.getElementById("value_pos2").onclick = function() {
  val+=2;
  document.getElementById("Counter").textContent=val;
  document.getElementById('History_print').innerHTML+="<li>+2</li>";
}

