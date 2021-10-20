import { MyError } from "./MyError.js";
const list = document.querySelector('.list')

export class People {
    _url;

    constructor(url) {
        this._url = url;
    }
    getPeople() {
         fetch(this._url)
        .then(data => data.json())
        .then(data => {
            data.results.forEach(el => {
                list.innerHTML+=this.createPerson(el)
            })
        })
        .catch(e=>new MyError(e.message));
    }
    createPerson (data)  {
        return `
            <li class="list__item ">
                <div class="list__item_info">
                    <div class="name">Name: ${data.name}</div>
                    <div class="gender">Gender: ${data.gender}</div>
                    <div class="height">Height: ${data.height}</div>
                    <div class="birth_year">Birth year: ${data.birth_year}</div>
                </div>
            </li>
        `
    }
    filter (str) {
        fetch(this._url+'/?name='+str)
        .then(data => data.json())
            .then(data => {
            data.results.forEach(el => {
                list.innerHTML+=this.createPerson(el)
            })
        })
            .catch(e => {
                new MyError(e.message)
                alert('There is no results with that name')
                this.getPeople()
            });
    }
}
export class Person extends People {
    constructor(url) {
        super(url)
    }
    getPerson (id)  {
        fetch(this._url+'/'+id)
       .then(data => data.json())
       .then(data => {
           return data.name
       })
    }
}