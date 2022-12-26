//Array methods - Programación funcional
//ForEach, map, sort, filter, reduce
//Fetch API
//Async await
const main = document.getElementById('main');
const addUsertBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

//Array of objects for the items
let data =[];


getRandomUser(); //Llamando la función para generar el usaurio 1
getRandomUser(); //Llamando la función para generar el usaurio 2
getRandomUser(); //Llamando la función para generar el usaurio 3


// fetch random user and add money asycn function
async function getRandomUser(){
    //Con Async await nos evitamos el .then()
    //Creamos una variable con await para el fecth 1 era promesa
    const res = await fetch('https://randomuser.me/api');
    //Creamos una variable para convertir los resultados en formato json
    const data = await res.json();
    //console.log(data);

    const user=data.results[0];

    //Construimos un objeto con lo que viene al hacer fetch
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000)
    };
    //console.log(newUser);
    addData(newUser);
}


function addData(obj){
    data.push(obj);
}



