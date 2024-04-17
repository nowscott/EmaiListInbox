import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export default function(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email } = req.body;

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
    .then(data => {
        res.status(200).json(data);
    })
    .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    });
}
