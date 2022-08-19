import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('price/bitcoin')
  getBitcoinPrice() {
    return this.apiService.getBitcoinPrice();
  }

  @Get('facts/cats')
  getCatFacts() {
    return this.apiService.getCatFacts();
  }

  @Get('facts/cats/deprecated')
  getCatFactsWithAxiosLib() {
    return this.apiService.getCatFactsWithAxiosLib();
  }
}
