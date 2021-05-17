class countryCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render()
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="card">
            <img src="https://restcountries.eu/data/afg.svg" alt="Bandera " class="img-fluid">
                <div class="card-content">
                    <h2>Name</h2>
                    <p>
                        Population:
                        
                    </p>
                    <p>
                        Region: 
                        
                    </p>
                    <p>
                        Capital:
                        
                    </p>
                </div>
            </div>
            ${this.getStyles()}
        `
        return template
    }
    getStyles(){
        return `
        <style>
            .card{
                background-color: rgba(255, 255, 255, 0.1);
                width:270px;
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
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    
}
customElements.define('country-card', countryCard)
