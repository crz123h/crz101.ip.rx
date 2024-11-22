async function analyzeTarget() {
    const target = document.getElementById('targetInput').value;

    if (!target) {
        alert('Please enter a target');
        return;
    }

    try {
        const response = await fetch(`/api/shodan?query=${target}`);
        const data = await response.json();

        if (data.error) {
            alert(`Error: ${data.error}`);
            return;
        }

        document.getElementById('resultsContainer').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error(error);
        alert('Failed to fetch data from Shodan');
    }
}
