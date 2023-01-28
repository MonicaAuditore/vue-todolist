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
        { text: "Studiare", done: true },
        { text: "Fare la torta", done: false },
        { text: "Fare la spesa", done: true },
      ],

      taskIncompleta: "testoSbarrato",
    };
  },
  methods: {
    inserisciTesto() {
      this.todo.push({ text: this.inputNew, done: true });
      this.inputNew = "";
      console.log(input);
    },

    eliminaTesto(index) {
      this.todo.splice(index, 1);
      console.log("click");
    },

    //al click se è vero diventa falso e viceversa
    trueFalse(index) {
      this.todo[index].done = !this.todo[index].done;
      console.log(this.todo);
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

//ANIMAZIONE BOTTONE

if (document.body.animate) {
  document.querySelector("#button").addEventListener("click", pop);
}

function pop(e) {
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector("#button").getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // As we need the coordinates of the mouse, we pass them as arguments
      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle(x, y) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  // Calculate a random size from 5px to 25px
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = `hsl(${Math.random() * 90 + 180}, 80%, 60%)`;

  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  // Store the animation in a variable as we will need it later
  const animation = particle.animate(
    [
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1,
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 1000 + 500,
      easing: "cubic-bezier(0, .9, .57, 1)",
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200,
    }
  );

  // When the animation is complete, remove the element from the DOM
  animation.onfinish = () => {
    particle.remove();
  };
}
