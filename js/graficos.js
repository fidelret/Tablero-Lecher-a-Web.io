
const precio_litro = document.getElementById("PRefPagProd").getContext("2d");
const graf_precio_litro = new Chart(precio_litro, {
type: 'bar',
data: {
labels: ['abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22', 'abr 22', 'may 22', 'jun 22', 'jul 22', 'ago 22', 'sep 22', 'oct 22', 'nov 22'],
datasets: [{
    label: 'Valores en pesos $',
    data: [28.40, 30.15, 31.69, 32.73, 33.42, 33.90, 34.14, 35.52, 36.15, 36.58, 38.43, 41.12, 44.31, 46.87, 49.21, 52.06, 54.34, 57.03, 59.88, 63.17],
    backgroundColor: [
        'rgba(0,55,203,0.5)',
    ],
    borderColor: [
        'rgba(0,55,203,1)',
        
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
labels: ['mar 21', 'abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22', 'abr 22', 'may 22', 'jun 22', 'jul 22', 'ago 22', 'sep 22', 'oct 22', 'nov 22'],
datasets: [{
    label: 'Producción mensual de leche cruda en millones de litros',
    data: [174.48, 170.58, 182.11, 180.98, 195.47, 211.09, 214.02, 227.06, 212.12, 203.04, 179.11, 155.57, 169.09, 164.54, 177.47, 174.59, 187.25, 204.09, 208.46, 217.48, 204.07],
    backgroundColor: [
        'rgba(255,120,0,0.5)',
    ],
    borderColor: [
        'rgba(255,120,0,1)',
        
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
type: 'line',
data: {
labels: ['mar 21', 'abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22', 'abr 22', 'may 22', 'jun 22', 'jul 22', 'ago 22', 'sep 22', 'oct 22', 'nov 22'],
datasets: [{
    label: '% Solidos Útiles',
    data: [7.07, 7.17, 7.29, 7.23, 7.19, 7.14, 7.12, 7.09, 7.02, 6.96, 6.96, 7.09, 7.26, 7.36, 7.43, 7.42, 7.36, 7.26, 7.20, 7.18, 7.11],
    backgroundColor: [
        'rgba(255,173,0,0.5)',
    ],
    borderColor: [
        'rgba(255,173,0,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: false
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


