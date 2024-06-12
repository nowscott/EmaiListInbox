import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export const addSubscriberToNotion = async (name, email) => {
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

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
            'Notion-Version': '2021-05-13',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to add subscriber to Notion');
    }

    return response.json();
};
