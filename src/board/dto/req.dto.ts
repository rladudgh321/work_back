import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBoardPostReqDto {
  @ApiProperty({
    title: 'post title',
    description: '게시글 제목을 적어주세요',
    example: '어떤 제목이 좋을까요?',
  })
  @IsString()
  title: string;

  @ApiProperty({
    title: 'post description',
    description: '게시글 내용을 적어주세요',
    example: '어떤 내용을 써볼까요?',
  })
  @IsString()
  description: string;
}
