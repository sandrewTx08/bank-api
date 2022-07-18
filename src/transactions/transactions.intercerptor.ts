import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Users } from '@prisma/client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailsService } from 'src/emails.service';

@Injectable()
export class TransactionsEmailNotification implements NestInterceptor {
  constructor(private emailService: EmailsService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<{ to_user?: Users; from_user: Users }>,
  ): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data.from_user) {
          this.emailService.sendByGmailProvider({
            to: data.from_user.email,
            subject: 'Transfer',
          });
          this.emailService.sendByGmailProvider({
            to: data.to_user.email,
            subject: 'Transfer',
          });
        } else
          this.emailService.sendByGmailProvider({
            to: data.from_user.email,
            subject: 'Deposit',
            text: 'Deposit',
          });

        return data;
      }),
    );
  }
}
