import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { addSubscriberToNotion } from './api/addSubscriberToNotion.js';
import { sendNotificationEmail } from './api/sendNotificationEmail.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/subscribe', async (req, res) => {  // 更改路径为 /api/subscribe
    const { name, email } = req.body;

    try {
        await addSubscriberToNotion(name, email);
        await sendNotificationEmail(name, email);
        res.status(200).json({ message: '订阅成功！' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
