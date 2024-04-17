import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static('public')); // Serve static files

app.post('/subscribe', (req, res) => {
    const { name, email } = req.body;
    addSubscriberToNotion(name, email, res);
});

function addSubscriberToNotion(name, email, res) {
    const url = 'https://api.notion.com/v1/pages';
    const data = {
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
            'Name': {
                title: [{ text: { content: name } }]
            },
            'Email': {
                email: email // 确保 Notion 数据库中 Email 字段设置为 email 类型
            }
        }
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
            'Notion-Version': '2021-05-13',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
}



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
