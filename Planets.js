import { MyError } from "./MyError.js";

const list = document.querySelector(".list");

export class Planets {
    _url;

    constructor(url) {
        this._url = url;
    }
    getPlanets () {
              fetch(this._url)
                  .then(data =>data.json())
                  .then(data => {
                      data.results.forEach((el) => {
                      list.innerHTML += this.createPlanet(el);
                  });
                  })
                  .catch(e=>new MyError(e.message));
      };
    createPlanet (data) {
        return `
            <li class="list__item justify-content-start">
                <div class="list__item_info">
                    <div class="name">Name: ${data.name}</div>
                    <div class="orbital_period">Orbital period: ${data.orbital_period}</div>
                    <div class="diameter">Diameter: ${data.diameter}</div>
                </div>
            </li>
        `;
    };
    filter(str) {
        fetch(this._url+ '/?name='+str)
        .then(data => data.json())
        .then(data => {
            data.results.forEach(el => {
                list.innerHTML+=this.createPlanet(el)
            })
        })
        .catch(e=>new MyError(e.message));
    }

}

export class Planet extends Planets{
    constructor(url) {
        super(url)
    }
    getPlanet (id)  {
        fetch(this._url+'/'+id)
       .then(data => data.json())
       .then(data => {
           return data.name
       })
    }
}