import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendNotificationEmail = async (name, email) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SENDING_ACCOUNT,
            pass: process.env.SENDING_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SENDING_ACCOUNT,
        to: process.env.NOTIFICATION_EMAIL,
        subject: '新订阅通知',
        text: `新订阅者信息:\n\n名字: ${name}\n邮箱: ${email}`
    };

    await transporter.sendMail(mailOptions);
};
