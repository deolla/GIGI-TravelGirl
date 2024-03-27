import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    // Craete a transporter. A transporter is a service that sends the email.
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

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendEmail;
