class countryDetails extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({mode: 'open'});
   }
   static get observedAttributes() {
      return ['img' , 'name_country','native_name' , 'population',  'region', 'subregion',  'capital' , 'top_level_domain' , 'currencies'];
   }

   connectedCallback() {
      this.render();
   }

   attributeChangedCallback(attribute, oldAtribute, newAtribute) {
      this[attribute] = newAtribute;
      console.log(`${attribute } es ahora ${newAtribute}`)
   }
   getTemplate() {
      const template = document.createElement('template');
      let a = this.name_country.toLocaleLowerCase().replace(/ /g, '');
      template.innerHTML = `
            <div class="card">
                <img src=${this.img} alt=${this.name_country} class="img-fluid">
                <div class="card-content">
                    <h2>${this.name_country}</h2>
                    <div>
                        <p>
                            Native Name:
                            <span>${this.native_name}</span>
                        </p>
                        <p>
                            Population: 
                            <span>${this.population}</span>
                        </p>
                        <p>
                            Region:
                            <span>${this.region}</span>
                        </p>
                        <p>
                            Sub Region:
                            <span>${this.subregion}</span>                            
                        </p>
                    </div>
                    <div>
                        <p>
                            Capital:
                            <span>${this.subregion}</span>         
                        </p>
                        <p>
                            Top Level Domain: 
                            <span>${this.top_level_domain}</span>         
                        </p>
                        <p>
                            Currencies:
                            <span>${this.currencies}</span>         
                        </p>
                    </div>
                </div>
            </div>
            ${this.getStyles()}
        `;
      return template;
   }
   getStyles() {
      return `
        <style>
        a{
            text-decoration: none;
        }
        .card{
            display: flex;
            justify-content: center;
            gap: 100px;
        }
        .img-fluid{
            width:40%;
        }
        .card-content{
            color:#ffff;
        }
        .card-content > div > p{
            color:#ffff;
            font-weight: bold;
        }
        .card-content > div > p > span{
            color:#C2C5CB;
            font-weight: normal;
        }
        @media (max-width: 770px) {
        .card{
            flex-direction: column;
                align-items: center;
            gap:20px
        }
}
        </style>
        `;
   }
   render() {
      this.itIsRendered = true;
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
   }
}
customElements.define('country-details', countryDetails);
