// =========================
// إعداد رسم بياني لعرض المنافذ المفتوحة
// =========================

function createShodanChart(data) {
    // حدد موقع الرسم البياني
    const ctx = document.getElementById('shodanChart').getContext('2d');

    // استخراج البيانات للرسم
    const labels = data.map((port) => `Port ${port.port}`);
    const values = data.map((port) => port.count);

    // إنشاء الرسم البياني
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Open Ports',
                data: values,
                backgroundColor: ['#00d1ff', '#00ff00', '#ffdd00', '#ff0000']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                tooltip: { enabled: true }
            }
        }
    });
}

// =========================
// استدعاء الرسم عند توفر البيانات
// =========================
function updateShodanChart(apiResponse) {
    const openPorts = apiResponse.ports.map((port) => {
        return { port: port, count: Math.floor(Math.random() * 20) + 1 };
    });

    createShodanChart(openPorts);
}