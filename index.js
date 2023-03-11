class Person {
    reservations;

    constructor() {
        const usernameEl = document.querySelector('.username');
        usernameEl.textContent = this.getUserName();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery User';
    }

}

const person = new Person();