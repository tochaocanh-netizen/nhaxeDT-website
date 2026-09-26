const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const nav = [
  { href: '/', label: 'Trang chủ' },
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/lich-trinh', label: 'Lịch trình' },
  { href: '/lien-he', label: 'Liên hệ' }
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Trang chủ', nav, activePath: '/' });
});

app.get('/gioi-thieu', (req, res) => {
  res.render('about', { title: 'Giới thiệu', nav, activePath: '/gioi-thieu' });
});

app.get('/lich-trinh', (req, res) => {
  const routes = [
    { from: 'Hà Nội', to: 'Đà Nẵng', departs: '20:00', duration: '14 giờ', price: '450.000đ' },
    { from: 'Hà Nội', to: 'Sài Gòn', departs: '18:00', duration: '32 giờ', price: '850.000đ' },
    { from: 'Đà Nẵng', to: 'Nha Trang', departs: '19:30', duration: '10 giờ', price: '350.000đ' },
    { from: 'Sài Gòn', to: 'Đà Lạt', departs: '21:00', duration: '7 giờ', price: '280.000đ' }
  ];
  res.render('schedule', { title: 'Lịch trình', nav, activePath: '/lich-trinh', routes });
});

app.get('/lien-he', (req, res) => {
  res.render('contact', { title: 'Liên hệ', nav, activePath: '/lien-he' });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
