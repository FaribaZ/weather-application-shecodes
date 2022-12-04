function changeCity() {
  let city = prompt("Where are you now?");
  let temp = prompt("What's the temperature outside?");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${temp}°C`;
  let icon = document.querySelector(".icon");
  icon.innerHTML = temp >= 0 ? "☀️" : "☁️";
  let image = document.querySelector(".total");
}
let cityName = document.querySelector(".input-group-text");
cityName.addEventListener("click", changeCity);
