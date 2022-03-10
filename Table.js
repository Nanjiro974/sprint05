async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();

  console.log(data);

  let result = [""];

  for (pays in data) {
    result += `<table> ${data[pays].name.official} </table>`;
  }
  document.getElementById("table").innerHTML = result;
}
render();
