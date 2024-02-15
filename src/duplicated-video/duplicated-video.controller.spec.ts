import { Test, TestingModule } from '@nestjs/testing';
import { DuplicatedVideoController } from './duplicated-video.controller';

describe('DuplicatedVideoController', () => {
  let controller: DuplicatedVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuplicatedVideoController],
    }).compile();

    controller = module.get<DuplicatedVideoController>(DuplicatedVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
