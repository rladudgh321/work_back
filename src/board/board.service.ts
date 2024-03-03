import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  async create(title: string, description: string) {
    return console.log({ title, description });
  }
}
