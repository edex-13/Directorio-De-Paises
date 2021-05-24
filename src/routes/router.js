import getData from '../utils/getData';
import getHash from '../utils/getHash';
import templateCard from '../template/templateCard';
import templateCountry from '../template/templateCountry';
const input = document.querySelector('.input');
console.log(input);
const router = async () => {
   let hash = getHash();
   let data = await getData();
   hash === '/' ? templateCard(data) : uniqueHash(hash);

   input.addEventListener('input', (e) => {
      let value = e.srcElement.value
      if (value  == '') {
         templateCard(data);
      } else {
         filterHash(value);
      }
   });
   function filterHash(hash) {
      console.log(hash);
      let filteredData = data.filter((country) => {
         return country.name.toLocaleLowerCase().indexOf(hash) == 0;
      });
      templateCard(filteredData);
   }
   function uniqueHash(hash){
      let filteredData = data.filter((country) => {
         return country.name.toLocaleLowerCase() == hash;
      });
      templateCountry(filteredData);
   }
};

export default router;
