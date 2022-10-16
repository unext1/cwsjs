const nextCountry = document.getElementById("nextBtn");
const prevCountry = document.getElementById("previousBtn");

const countryFrom = document.getElementById("countryForm");
const countriesDiv = document.getElementById("countriesDiv");
const addCountryBtn = document.getElementById("addCountry");

const nameInputValue = document.getElementById("countryName").value;
const capitalInputValue = document.getElementById("countryCapital").value;
const populationInputValue = document.getElementById("countryPopulation").value;

const flagInputValue = document.getElementById("countryFlag").value;

let i = 0;

const countries = [
  {
    name: "Sweden",
    capital: "Stockholm",
    population: 5,
    flagSrc: "https://www.worldometers.info/img/flags/sw-flag.gif",
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    population: 4,
    flagSrc: "https://www.worldometers.info/img/flags/da-flag.gif",
  },
];

const changeInnerHtml = () => {
  countriesDiv.innerHTML = `
     <img src=${countries[i].flagSrc} alt="Country Flag" id="countryImg">
      <div>name: ${countries[i].name}</div>
      <div>capital: ${countries[i].capital}</div>
      <div>population: ${countries[i].population}</div>
      `;
};

const buttonFunction = (prev) => {
  countriesDiv.innerHTML = "";
  prev ? i-- : i++;
  changeInnerHtml();
};

const addCountry = function (e) {
  e.preventDefault();
  countries.push({
    name: nameInputValue,
    capital: capitalInputValue,
    population: populationInputValue,
    flagSrc:
      flagInputValue ||
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Unknown_flag_-_European_version.png",
  });

  countryFrom.reset();
};

const nextBtn = function () {
  if (i < countries.length - 1) {
    buttonFunction();
  }
};

const prevBtn = function () {
  if (i > 0) {
    buttonFunction((prev = true));
  }
};

addCountryBtn.addEventListener("click", addCountry);
nextCountry.addEventListener("click", nextBtn);
prevCountry.addEventListener("click", prevBtn);

changeInnerHtml();
