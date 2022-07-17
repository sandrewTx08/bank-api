import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailsService {
  async send<T>(mailInfo: Mail<T>['options']) {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: '',
      },
    });

    const sendInfo = await transporter.sendMail(mailInfo);
    return sendInfo;
  }
}
