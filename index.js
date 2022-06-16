

const pizzas = [
    {id: 1, nombre: `muzza`, ingredientes: [`muzzarella`], precio: 500, imagen: `/Imagenes/pizza-muzzarella.jpg` },
    {id: 2, nombre: `jamon`, ingredientes: [`muzzarella`, `jamon`], precio: 530, imagen: `/Imagenes/pizza-jamon.jpg`},
    {id: 3, nombre: `tomate`, ingredientes: [`muzzarella`, `tomate`], precio: 550, imagen: `/Imagenes/pizza-tomate.jpg`},
    {id: 4, nombre: `salame`, ingredientes: [`muzzarella`, `salame`], precio: 580, imagen: `/Imagenes/pizza-salame.jpg`},
    {id: 5, nombre: `roquefort`, ingredientes: [`muzzarella`, `roquefort`], precio: 610, imagen: `/Imagenes/pizza-roquefort.jpg`},
    {id: 6, nombre: `panceta`, ingredientes: [`muzzarella`, `panceta`], precio: 650, imagen: `/Imagenes/pizza-panceta.jpg`}];


const nombrePizza = document.querySelector(`#nombrePizza`);
const precioPizza = document.querySelector(`#precioPizza`);
const ingredientesPizza = document.querySelector(`#ingredientesPizza`);
const idPizza = document.querySelector(`#idPizza`);
const verPizza = document.querySelector(`#verPizza`);
const imgPizza = document.querySelector(`#imgPizza`);
const conteinerPizza = document.querySelector(`#contenedorPizza`);

const storePizzas= localStorage.setItem('pizzas', JSON.stringify(pizzas));

verPizza.addEventListener('click', (e) =>{
    
    const inputValue= idPizza.value;
    pizzaFind = pizzas.find((pizza) => pizza.id == inputValue)
    if(!pizzaFind){
        alert('Ingresa un valor valido')
    }else{
        const imagen= document.createElement('img');
        imagen.setAttribute('src',pizzaFind.imagen);
        imgPizza.appendChild(imagen);
        imgPizza.removeChild(imgPizza.firstChild);
        nombrePizza.innerText = `Pizza de ${pizzaFind.nombre}`;
        ingredientesPizza.innerText = (`Ingredientes: ${pizzaFind.ingredientes}`);
        precioPizza.innerText = (`Precio: $${pizzaFind.precio}`);
        idPizza.value= '';
    };
})









// E4: Local Storage + CSS | Javascript

/*  Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

👉 A cada Pizza, agregarle una imagen. 
👉 Guardar el array en el local storage. 
👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
👉 Debajo del card tiene que haber un input y un botón. 

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel).    */



