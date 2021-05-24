import '../components/countryDetails';
const details = document.getElementById('details');
const containerCards = document.getElementById('cards');
const templateCard = (countrys) => {
    const country = countrys[0]
   containerCards.innerHTML = '';

   let card = document.createElement('country-details');
   console.log(countrys)
   attributes(card, 'img', country.flag);
   attributes(card, 'name_country', country.name);
   attributes(card, 'native_name', country.nativeName);
   attributes(card, 'population', country.population);
   attributes(card, 'region', country.region);
   attributes(card, 'subregion', country.subregion);
   attributes(card, 'capital', country.capital);
   attributes(card, 'top_level_domain', country.topLevelDomain[0]);
   attributes(card, 'currencies', `${country.currencies[0].code} - ${country.currencies[0].name}`);
   details.append(card);
};

const attributes = (card, name, value) => card.setAttribute(name, value);
export default templateCard;
