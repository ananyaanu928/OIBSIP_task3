let cel = document.getElementById("celsius");
let fah = document.getElementById("fahrenheit");
let clearr = document.getElementById("clear");

cel.oninput = () => {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(3));
};

fah.oninput = () => {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(3));
};

document.getElementById("clear").onclick = clearForm;
function clearForm() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
}

