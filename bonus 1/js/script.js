/*Esercizio di oggi: Vue To Do List
nome repo: vue-todolist

Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco di ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      inputNew: "",

      todo: [
        { text: "fare i compiti", done: true },
        { text: "fare la spesa", done: false },
        { text: "fare il bucato", done: true },
      ],

      taskIncompleta: "testoSbarrato",
    };
  },
  methods: {
    inserisciTesto() {
      this.todo.push({ text: this.inputNew, done: true });

      console.log(input);
    },

    eliminaTesto(index) {
      this.todo.splice(index, 1);
      console.log("click");
    },

    testoSbarrato(index) {
      if (this.todo[index].done) {
        return;
      } else {
        return this.taskIncompleta;
      }
    },
  },
}).mount("#app");
