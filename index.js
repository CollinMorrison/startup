import { reservations } from './reservations.js';

class Person {
    myReservations = [];

    constructor() {
        const usernameEl = document.querySelector('.username');
        console.log(reservations);
        usernameEl.textContent = this.getUserName();
        this.myReservations = reservations;
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery User';
    }

}
const person = new Person();
