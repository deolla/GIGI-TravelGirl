import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    // Craete a transporter. A transporter is a service that sends the email.
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: 'nmxm bula fjdq hwng'
            }
        });
        
        const mailOptions = {
            from: process.env.EMAIL,
            to: options.email,
            subject: options.subject,
            text: options.message
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
        throw new Error('An error occurred sending email');
    }
}

export default sendEmail;
