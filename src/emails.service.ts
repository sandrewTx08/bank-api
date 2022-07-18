import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailsService {
  async sendByGmailProvider<T, M = Mail<T>['options']>(
    mailInfo: Omit<M, 'from'>,
  ) {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const sendInfo = await transporter.sendMail({
      ...mailInfo,
      from: process.env.GMAIL_USER,
    });
    return sendInfo;
  }
}
