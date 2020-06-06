import { Injectable } from '@nestjs/common';
import { FizzBuzz } from './FizzBuzz';

@Injectable()
export class AppService {
  private fizzNumber = 3;
  private buzzNumber = 5;
  constructor(private fizzBuzz: FizzBuzz) {}
  setFizzBuzzConfig(fizzNumber = 3, buzzNumber = 5) {
    this.fizzNumber = fizzNumber;
    this.buzzNumber = buzzNumber;
  }
  generateFizzBuzzList(numbers: number[]): (number | string)[] {
    return numbers.map(number =>
      this.fizzBuzz.getFizzBuzz(number, this.fizzNumber, this.buzzNumber),
    );
  }
}
