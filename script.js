function sayHello() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = "Hello " + name;
}