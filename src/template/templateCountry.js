import '../components/countryDetails';

const templateCard = (countrys) => {
   const details = document.getElementById('container');
   details.classList.remove('cards');
   details.innerHTML = '';
   const searh = document.querySelector('.container__search_input');
   searh.innerHTML = ``;
   const country = countrys[0];

   let card = document.createElement('country-details');
   console.log(countrys);
   attributes(card, 'img', country.flag);
   attributes(card, 'name_country', country.name);
   attributes(card, 'native_name', country.nativeName);
   attributes(card, 'population', country.population);
   attributes(card, 'region', country.region);
   attributes(card, 'subregion', country.subregion);
   attributes(card, 'capital', country.capital);
   attributes(card, 'top_level_domain', country.topLevelDomain[0]);
   attributes(card, 'currencies', `${country.currencies[0].code} - ${country.currencies[0].name}`);
   console.log(card);
   details.append(card);
};

const attributes = (card, name, value) => card.setAttribute(name, value);
export default templateCard;
