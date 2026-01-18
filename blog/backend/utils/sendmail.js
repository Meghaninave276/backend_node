import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendmail = async (email, otp) => {
  try {
    await transport.sendMail({
      from: `OTP Service <${process.env.EMAIL}>`,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    return true;
  } catch (err) {
    console.error("MAIL ERROR FULL:", err.message);
    throw err;
  }
};
