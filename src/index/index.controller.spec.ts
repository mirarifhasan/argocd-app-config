import { Test, TestingModule } from '@nestjs/testing';
import { IndexController } from './index.controller';

describe('IndexController', () => {
  let indexController: IndexController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IndexController],
      providers: [],
    }).compile();

    indexController = app.get<IndexController>(IndexController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const expected = {
        message: null,
        data: {
          app: 'Service is running...',
        },
      };

      const result = indexController.index();
      console.log(result);

      expect(result).toEqual(expected);
    });
  });
});
