import '../components/card';


const templateCard = (data)=>{
    const containerCards = document.getElementById('container');
    containerCards.classList.add('cards')
    containerCards.innerHTML = ''
    const searh = document.querySelector('.container__search_input')
    searh.innerHTML = `
            <input type="text" placeholder="Search for a country..." class="input" />
            <img src="../src/assets/images/lupa.svg" alt="icon-lupa" class="search__logo" />`
    data.forEach(country => {
        let card = document.createElement('country-card');
        attributes(card , "img", country.flag)
        attributes(card , "name_country", country.name)
        attributes(card , "population", country.population)
        attributes(card , "region" ,country.region)
        attributes(card , "capital" ,country.capital)
        containerCards.append(card);
    });
}
        
const attributes = (card , name , value)=>card.setAttribute(name , value)
export default templateCard