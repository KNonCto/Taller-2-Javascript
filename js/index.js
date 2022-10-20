function number(element) {
  document.getElementById("result").innerHTML += element.innerHTML.trim();
}

function operation(element) {
  document.getElementById("current-function").innerHTML =
    document.getElementById("result").innerHTML + element.innerHTML;
}

function clean() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("current-function").innerHTML = "";
}
