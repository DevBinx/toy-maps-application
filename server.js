const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const path = require('path');
require('dotenv').config();  // .env 파일 로드

// MySQL 연결 설정
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// MySQL 연결
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// 정적 파일을 제공하기 위한 설정
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 위치 기반 데이터를 조회하는 API
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM users';

    // 쿼리 실행 및 결과 반환
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        // 쿼리 결과 배열을 그대로 반환
        res.json(results);
    });
});

// Express.js 서버 실행
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

