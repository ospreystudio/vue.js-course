Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
            this.enteredValue = ''

        }
    }
}).mount('#app');



// const buttonEl = document.querySelector('button')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('ul')
//
//
//
// function addGaol() {
//     const enteredValue = inputEl.value;
//     const listElement = document.createElement('li')
//     listElement.textContent = enteredValue;
//     listEl.appendChild(listElement);
//     inputEl.value=''
// }
//
// buttonEl.addEventListener('click', addGaol)