import { reservations } from './reservations.js';

class Person {
    myReservations = [];

    constructor() {
        const usernameEl = document.querySelector('.username');
        //console.log(reservations);
        usernameEl.textContent = this.getUserName();
        this.myReservations = reservations;
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery User';
    }

    loadReservations() {
        const reservationsEl = document.querySelector('#reservationSection');
        if (this.myReservations.length) {
            for (const [i, reservation] of reservations.entries()) {
                const classEl = document.createElement('div');
                const timeEl = document.createElement('div');
                
                //console.log(`class: ${reservation.class}`);
                classEl.textContent = reservation.class;
                timeEl.textContent = reservation.time;

                const cardEl = document.createElement('div');
                cardEl.appendChild(classEl);
                cardEl.appendChild(timeEl);

                console.log(cardEl);
                console.log(reservationsEl);

                reservationsEl.appendChild(cardEl);

            }
        }
    }

}
const person = new Person();
person.loadReservations();
