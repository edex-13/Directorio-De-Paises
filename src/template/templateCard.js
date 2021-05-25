import '../components/card';


const templateCard = (data)=>{
    const containerCards = document.getElementById('container');
    containerCards.classList.add('cards')
    containerCards.innerHTML = ''
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