import { Injectable } from '@nestjs/common';
import { FizzBuzz } from './FizzBuzz';

@Injectable()
export class AppService {
  constructor(private fizzBuzz: FizzBuzz) {}
  generateFizzBuzzList(numbers: number[]): (number | string)[] {
    return numbers.map(number => this.fizzBuzz.getFizzBuzz(number));
  }
}
