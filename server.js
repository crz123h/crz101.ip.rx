const express = require('express');
const path = require('path');
const app = express();

// إعداد المنفذ
const PORT = 3000;

// تقديم الملفات الثابتة (HTML, CSS, JS) من المجلد الحالي
app.use(express.static(__dirname));

// إعداد المسارات للملفات المختلفة
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/privacy.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/terms.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms.html'));
});

// استخدام المسارات الخاصة بـ API
const apiRoutes = require('./scraip.js');
app.use('/api', apiRoutes);

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
