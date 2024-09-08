import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.PRIVATE_KEY);
    return 'Hello World!';
  }
}
