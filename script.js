// =========================
// إعداد المتغيرات العامة
// =========================

// حفظ الإحصائيات الرئيسية للموقع
const stats = {
    totalScans: 0,
    openPorts: 0,
    alerts: 0,
};

// =========================
// وظائف تحليلية (APIs)
// =========================

// تحليل الهدف باستخدام Shodan API
async function analyzeTarget() {
    const target = document.getElementById("targetInput").value;
    const resultsContainer = document.getElementById("resultsContainer");

    if (!target) {
        resultsContainer.textContent = "Please enter a valid target.";
        return;
    }

    resultsContainer.textContent = "Fetching data...";

    try {
        const shodanResponse = await fetch(
            `https://api.shodan.io/shodan/host/search?key=3eUPKAyjY5nIQS17qJKt8qmdoOS3Fmz1&query=${target}`
        );
        const shodanData = await shodanResponse.json();

        updateStats("totalScans");
        renderResults({
            title: "Shodan Analysis Results",
            data: shodanData,
        });
    } catch (error) {
        resultsContainer.textContent = `Error: ${error.message}`;
    }
}

// البحث عن موقع الـ IP باستخدام IP Geolocation API
async function ipLocation() {
    const target = document.getElementById("targetInput").value;
    const resultsContainer = document.getElementById("resultsContainer");

    if (!target) {
        resultsContainer.textContent = "Please enter a valid target.";
        return;
    }

    resultsContainer.textContent = "Fetching geolocation data...";

    try {
        const response = await fetch(`https://ipinfo.io/${target}/json?token=YOUR_API_TOKEN`);
        const data = await response.json();

        renderResults({
            title: "Geolocation Data",
            data,
        });
    } catch (error) {
        resultsContainer.textContent = `Error: ${error.message}`;
    }
}

// البحث عن معلومات WHOIS باستخدام WHOIS API
async function whoisLookup() {
    const target = document.getElementById("targetInput").value;
    const resultsContainer = document.getElementById("resultsContainer");

    if (!target) {
        resultsContainer.textContent = "Please enter a valid target.";
        return;
    }

    resultsContainer.textContent = "Fetching WHOIS data...";

    try {
        const response = await fetch(`https://api.whoisxmlapi.com/v1/whois?apiKey=YOUR_API_KEY&domainName=${target}`);
        const data = await response.json();

        renderResults({
            title: "WHOIS Data",
            data,
        });
    } catch (error) {
        resultsContainer.textContent = `Error: ${error.message}`;
    }
}

// =========================
// لوحة التحكم (Dashboard)
// =========================

// تحديث الإحصائيات في لوحة التحكم
function updateStats(statKey) {
    if (stats[statKey] !== undefined) {
        stats[statKey]++;
        renderDashboard();
    }
}

// عرض البيانات على لوحة التحكم
function renderDashboard() {
    document.getElementById("totalScans").textContent = stats.totalScans;
    document.getElementById("openPorts").textContent = stats.openPorts;
    document.getElementById("alerts").textContent = stats.alerts;
}

// =========================
// واجهة المستخدم (UI)
// =========================

// عرض النتائج في واجهة المستخدم
function renderResults({ title, data }) {
    const resultsContainer = document.getElementById("resultsContainer");

    const formattedData = JSON.stringify(data, null, 2);

    resultsContainer.innerHTML = `
        <h3>${title}</h3>
        <pre>${formattedData}</pre>
    `;
}

// =========================
// تسجيل الدخول (Login)
// =========================

// تسجيل الدخول باستخدام Google
function loginWithGoogle() {
    alert("Login with Google is under development. Please check back soon!");
}

// تسجيل الدخول باستخدام Facebook
function loginWithFacebook() {
    alert("Login with Facebook is under development. Please check back soon!");
}

// تسجيل الدخول باستخدام Instagram
function loginWithInstagram() {
    alert("Login with Instagram is under development. Please check back soon!");
}

// =========================
// إعداد الصفحة عند التحميل
// =========================

document.addEventListener("DOMContentLoaded", () => {
    renderDashboard();
    console.log("Application loaded successfully.");
});