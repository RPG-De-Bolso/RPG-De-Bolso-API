import { Test, TestingModule } from '@nestjs/testing';
import { AttributeController } from './attribute.controller';
import { AttributeService } from './attribute.service';

describe('AttributeController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [],
      providers: [AttributeService],
    }).compile();
  });

  describe('getAttributes', () => {
    it('should return attributes list', () => {
      const attributeController = app.get(AttributeController);
      expect(attributeController.getAttributes()).toHaveLength(6);
    });
  });
});
