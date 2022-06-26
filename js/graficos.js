
const precio_litro = document.getElementById("PRefPagProd").getContext("2d");
const graf_precio_litro = new Chart(precio_litro, {
type: 'bar',
data: {
labels: ['abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22'],
datasets: [{
    label: 'Valores en pesos $',
    data: [28.40, 30.15, 31.69, 32.73, 33.42, 33.90, 34.14, 35.52, 36.15, 36.58, 38.43, 41.12],
    backgroundColor: [
        'rgba(255, 255, 255, 1)',
    ],
    borderColor: [
        'rgba(255, 120, 0, 1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);



const produccion_mensual = document.getElementById("lech_crud").getContext("2d");
const graf_produccion_mensual = new Chart(produccion_mensual, {
type: 'bar',
data: {
labels: ['mar 21', 'abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22'],
datasets: [{
    label: 'Producción mensual de leche cruda en millones de litros',
    data: [174.48, 170.58, 182.11, 180.98, 195.47, 211.09, 214.02, 227.06, 212.12, 203.04, 179.11, 155.57, 169.09],
    backgroundColor: [
        'rgba(0,173,193,1)',
    ],
    borderColor: [
        'rgba(0,55,203,0.5)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);

const solidos_utiles = document.getElementById("graf_solidos_Utiles").getContext("2d");
const graf_solidos_utiles = new Chart(solidos_utiles, {
type: 'bar',
data: {
labels: ['mar 21', 'abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22'],
datasets: [{
    label: 'Producción mensual de leche cruda en millones de litros',
    data: [174.48, 170.58, 182.11, 180.98, 195.47, 211.09, 214.02, 227.06, 212.12, 203.04, 179.11, 155.57, 169.09],
    backgroundColor: [
        'rgba(0,173,193,1)',
    ],
    borderColor: [
        'rgba(0,55,203,0.5)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);






/*
console.log(graf_precio_litro.data.labels);
console.log(graf_precio_litro.data.datasets[0].data);

graf_precio_litro.data.labels.push(['abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22' ]);
graf_precio_litro.data.datasets[0].data.push([28.40, 30.15, 31.69, 32.73, 33.42, 33.90, 34.14, 35.52, 36.15, 36.58, 38.43, 41.12]);

*/


