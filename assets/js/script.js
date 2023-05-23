const tareas = [
    {   id: 1 ,
        descripcion: "Cambiar el filtro del auto",
        isDone: false
    },
    {
        id: 2 ,
        descripcion: "Comprar comida para los michis",
        isDone: false
    },
    {
        id: 3 ,
        descripcion: "Arreglar silla comedor",
        isDone: false
    }
];


const input = document.getElementById('input');
const btn = document.getElementById('agregar');
const conteoTotal = document.getElementById('conteoTotal');
const conteoRealizados = document.getElementById('conteoRealizados');
const bodyTabla = document.getElementById ('bodyTabla')


const loadTareas = (listatareas) => {
    const listaTemporal = [];
    for(tarea of listatareas) {
        const list = `
        <tr>
            <td>${tarea.id}</td>
            <td id="descripcionTabla">${tarea.descripcion}</td>
            <td><input type="checkbox" onclick="completeTask(${tarea.id})" id="${tarea.id}"/></td>
            <td><button onclick="deleteTask()" id="${tarea.id}">X</button></td>
        </tr>`;
        listaTemporal.push(list);
    }
    bodyTabla.innerHTML = listaTemporal;
};

loadTareas(tareas);

btn.addEventListener('click', () => {
    const input = document.getElementById ('input').value;
    const idTask = tareas.length + 1;
    tareas.push ({id: idTask , descripcion: input , isDone: false });
    loadTareas(tareas);
    completeTask();
    totalTask();
});


const completeTask = (id) => {
    const index = tareas.findIndex((tarea) => tarea.isDone = true )
   /*  tareas[id - 1] = {...tareas[id - 1], isDone: true }; */
    const conteoTareas = tareas.filter((tarea) => tarea.isDone == true);
    conteoRealizados.innerHTML = `${conteoTareas.length}`
    console.log (tareas)
};

const totalTask = (id) => {
    const totalConteo = tareas.length
    conteoTotal.innerHTML = `${totalConteo}`;
}

const deleteTask = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    tareas.splice (index, 1);
    totalTask();
    completeTask();
    loadTareas(tareas);
};

totalTask()


