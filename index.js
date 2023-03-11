import reservations from 'reservations.js';

class Person {
    myReservations;

    constructor() {
        const usernameEl = document.querySelector('.username');
        usernameEl.textContent = this.getUserName();
        myReservations = reservations;
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery User';
    }

}

const person = new Person();
