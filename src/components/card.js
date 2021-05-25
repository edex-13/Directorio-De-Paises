class countryCard extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({mode: 'open'});
   }
   static get observedAttributes() {
      return ['img', 'name_country', 'population', 'region', 'capital'];
   }

   connectedCallback() {
      this.render();
   }

   attributeChangedCallback(attribute, oldAtribute, newAtribute) {
      this[attribute] = newAtribute;
   }
   getTemplate() {
      const template = document.createElement('template');
      let a = this.name_country.toLocaleLowerCase().replace(/ /g, '');
      template.innerHTML = `
      <a href="/?name=${this.name_country.toLocaleLowerCase()}">
         <div class="card">
            <img src=${this.img} alt=${this.name_country} class="img-fluid">
                <div class="card-content">
                    <h2>${this.name_country}</h2>
                    <p>
                        Population:
                        ${this.population}
                    </p>
                    <p>
                        Region: 
                        ${this.region}
                    </p>
                    <p>
                        Capital:
                        ${this.capital}
                    </p>
                </div>
            </div>
      </a>
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
                background-color: rgba(255, 255, 255, 0.1);
                width:270px;
                height: 390px;
                margin:20px;
                overflow: hidden;
                border-radius:5px;
                color:#ffff;
            }
            .card-content{
                padding:5px 10px;
            }
            .img-fluid{
                width:100%;
            }
        </style>
        `;
   }
   render() {
      this.itIsRendered = true;
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
   }
}
customElements.define('country-card', countryCard);
