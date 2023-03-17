import { Controller, Get } from '@nestjs/common';

@Controller()
export class IndexController {
  @Get()
  index() {
    return {
      message: null,
      data: {
        app: 'Service is running...',
      },
    };
  }
}
