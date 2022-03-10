async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();

  console.log(data);

  let result = "";
  let result0 = "";
  let result1 = "";
  let result2 = "";
  for (pays in data) {
    result += `<li class="list-group-item"> ${data[pays].name.official} </li>`;
  }
  for (Zone in data) {
    result0 += `<li class="list-group-item"> ${data[Zone].area} </li>`;
  }
  for (Pop in data) {
    result1 += `<li class="list-group-item"> ${data[Pop].population} </li>`;
  }
  for (nom in data) {
    result2 += `<li class="list-group-item"> ${data[nom].capital} </li>`;
  }
  console.log(typeof "list");
  document.getElementById("list").innerHTML = result;
  document.getElementById("list0").innerHTML = result0;
  document.getElementById("list1").innerHTML = result1;
  document.getElementById("list2").innerHTML = result2;
}
render();
