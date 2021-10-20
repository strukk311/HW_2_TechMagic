import {SWcount} from './counter.js'
import { Person} from './People.js'
import { Planets } from './Planets.js'

const peopleUrl = 'https://swapi.dev/api/people'
const planetsUrl='https://swapi.dev/api/planets'
const searchInput=document.querySelector('.search__input')
const searchBtn=document.querySelector('.search__button')
const list = document.querySelector('.list')
const peopleBtn=document.querySelector('.people')
const planetsBtn = document.querySelector('.planets')
let pageInfo = 'people';
const counter = SWcount()

const char = new Person(peopleUrl)
const plan = new Planets(planetsUrl)

peopleBtn.addEventListener('click', event => {
    event.preventDefault();
    list.innerHTML = ''
    char.getPeople()
    pageInfo = 'people'
})

planetsBtn.addEventListener('click', event => {
    event.preventDefault();
    list.innerHTML = ''
    plan.getPlanets()
    pageInfo = 'planets'

})

searchBtn.addEventListener('click', event => {
    event.preventDefault();
    list.innerHTML = ''
    let arr = pageInfo === 'people' ?
        char.filter(searchInput.value)
        :
        plan.filter(searchInput.value);
    console.log(counter(searchInput.value))
    searchInput.value = ''
    
    arr.filter(data=> data.name == document.querySelector('search__button').value)
})

char.getPeople(peopleUrl)