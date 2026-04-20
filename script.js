function getGreeting(name) {
  return "Hello " + name;
}

function sayHello() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = getGreeting(name);
}

// export for testing
module.exports = { getGreeting };