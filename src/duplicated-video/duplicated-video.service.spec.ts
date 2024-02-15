import { Test, TestingModule } from '@nestjs/testing';
import { DuplicatedVideoService } from './duplicated-video.service';

describe('DuplicatedVideoService', () => {
  let service: DuplicatedVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuplicatedVideoService],
    }).compile();

    service = module.get<DuplicatedVideoService>(DuplicatedVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
