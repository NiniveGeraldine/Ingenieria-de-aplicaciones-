document.addEventListener("DOMContentLoaded", function() {
    // Simulación de datos
    const data = [
        { subject: 'Matemáticas', score: 85 },
        { subject: 'Ciencias', score: 90 },
        { subject: 'Historia', score: 78 },
        { subject: 'Lengua', score: 88 }
    ];

    // Crear gráfico
    const chartContainer = document.getElementById('chartContainer');
    const chart = document.createElement('canvas');
    chartContainer.appendChild(chart);

    new Chart(chart, {
        type: 'bar',
        data: {
            labels: data.map(d => d.subject),
            datasets: [{
                label: 'Puntaje',
                data: data.map(d => d.score),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
