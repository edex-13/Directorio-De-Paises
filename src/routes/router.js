import getData from '../utils/getData';
import getHash from '../utils/getHash';
import templateCard from '../template/templateCard';
import templateCountry from '../template/templateCountry';

const router = async () => {
   let hash = getHash();
   let data = await getData();
   hash === '/' ? searh(data) : uniqueHash(hash);

   function filterHash(hash) {
      let filteredData = data.filter((country) => {
         return country.name.toLocaleLowerCase().indexOf(hash.toLocaleLowerCase()) == 0;
      });
      templateCard(filteredData);
   }
   function uniqueHash(hash) {
      let filteredData = data.filter((country) => {
         return country.name.toLocaleLowerCase() == hash;
      });
      console.log(data)
      templateCountry(filteredData);
   }
   function searh(data) {
      const searh = document.querySelector('#container_search');
      searh.classList.add('container__search_input')
      searh.innerHTML = `
            <input type="text" placeholder="Search for a country..." class="input" />
            <img src="../src/assets/images/lupa.svg" alt="icon-lupa" class="search__logo" />`;
      const input = document.querySelector('.input');
      input.addEventListener('input', (e) => {
         let value = e.srcElement.value;
         if (value == '') {
            templateCard(data);
         } else {
            filterHash(value);
         }
      });
      templateCard(data);
   }
};

export default router;
