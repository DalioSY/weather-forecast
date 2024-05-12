const searchBtn = document.querySelector(".bx-search-alt-2");

async function clickBtn() {
  const city = document.querySelector(".input-city").value;
  const apiKey = "cebcd482eda57fa9a6714c1c2ba91885";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  const resp = await fetch(apiUrl);
  const dados = await resp.json();

  document.querySelector(".country").innerHTML = dados.sys.country;
  document.querySelector(".city").innerHTML = dados.name;
  document.querySelector(".temp").innerHTML = `${Math.floor(
    dados.main.temp
  )} °C`;
  document.querySelector(".temp-max").innerHTML = `${Math.floor(
    dados.main.temp_max
  )} °C`;
  document.querySelector(".temp-min").innerHTML = `${Math.floor(
    dados.main.temp_min
  )} °C`;
  document.querySelector(".description").innerHTML =
    dados.weather[0].description;
  document.querySelector(".icon").src = `./img/${dados.weather[0].main}.png`;
  document.querySelector(".humidity").innerHTML = `${dados.main.humidity} %`;
  document.querySelector(".speed").innerHTML = `${dados.wind.speed} Km/h`;

  display();
}

searchBtn.addEventListener("keydown", clickBtn);
searchBtn.addEventListener("click", clickBtn);

function display() {
  const section = document.querySelector(".main");

  section.style.display = "block";
}
