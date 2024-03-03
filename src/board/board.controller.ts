import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardPostReqDto } from './dto/req.dto';

@ApiTags('Board')
@Controller('api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async create(@Body() { title, description }: CreateBoardPostReqDto) {
    return this.boardService.create(title, description);
  }
}
