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


//using mapp function
function doubleMoney(){
    data = data.map(user => {
        return {...user, money: user.money*2} 
    });
    updateDOM();
}

//Sort the users by the ammount
function sortBy(){
    data.sort((a,b)=>b.money-a.money);
    updateDOM();
}

//filter the data to show some criteria
function showFiltered(){
    data = data.filter(user => user.money>1000000);
    updateDOM();
}

//Calcular el valor total
function calculateWealth(){
    const wealth =data.reduce((acum, user)=>(acum += user.money),0);
    const wealthEl =document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function addData(obj){
    data.push(obj);

    updateDOM();
}

//Función con parámetro opcional para actualizar el Div en el DOM
function updateDOM(providedDAta=data){
    //Clear the main div
    main.innerHTML = '<h2><strong>Person</strong> Amount</h2>';

    providedDAta.forEach(item=>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>     ${formatMoney(item.money)}`;
        main.appendChild(element);
    });

}

// Format number as money
function formatMoney(number){
    return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




//Event listener
addUsertBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortBy);
showMillionairesBtn.addEventListener('click', showFiltered);
calculateWealthBtn.addEventListener('click', calculateWealth)

/*
Ejemplo de un map

const arr1 =[1,2,3,4,5];
const arr2 = arr1.map(item => item*2)
Output:
[2,4,6,8,10]

*/


/*
Ejemplo de un filter

cons arr = [20,23,25,30,21, 50,60];

const under30 = arr.filter(funtion(item){
    return item<30;
})

*/


/*
Ejemplo de uso de reduce

const arr = [1,2,3,4,5];

const total = arr.reduce((acum, num)=>(acum + num),0)
Output : 15

*/