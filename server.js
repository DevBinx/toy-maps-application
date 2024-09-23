const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const path = require('path');

// MySQL 연결 설정
const db = mysql.createConnection({
    host: '192.168.201.115',
    user: 'root',      // MySQL 사용자 이름
    password: 'root123!@#',      // MySQL 비밀번호
    database: 'large_data_db'
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
    const location = req.query.location || 'Seoul';

    const query = 'SELECT * FROM location_data';

    // 쿼리 실행 및 결과 반환
    db.query(query, [location], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        // 쿼리 결과 반환
        res.json({
            location: results[0].location,
            data: results[0].data_field
        });
    });
});

// Express.js 서버 실행
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});