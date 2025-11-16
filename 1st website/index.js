
let name;

document.getElementById("Username_submit").onclick = function() {
  name = document.getElementById("myUserName").value;
  console.log(name);
  document.getElementById("change_title").textContent = `Hello ${name}`;
}