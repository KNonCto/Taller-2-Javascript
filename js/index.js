function number(element) {
  document.getElementById("result").innerHTML += element.innerHTML.trim();
}

function operation(element) {
  document.getElementById("current-function").innerHTML +=
    document.getElementById("result").innerHTML + element.innerHTML;
  document.getElementById("result").innerHTML = "";
}

function clean() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("current-function").innerHTML = "";
}

function equals() {
  document.getElementById("result").innerHTML = eval(
    (
      document.getElementById("current-function").innerHTML +
      document.getElementById("result").innerHTML
    ).replace(/x/g, "*")
  );
  document.getElementById("current-function").innerHTML = "";
}
