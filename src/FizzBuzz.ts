import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzBuzz {
  private isFizz(number: number, fizzNumber: number): boolean {
    return number % fizzNumber === 0;
  }
  private isBuzz(number: number, buzzNumber: number): boolean {
    return number % buzzNumber === 0;
  }
  private isFizzBuzz(
    number: number,
    fizzNumber: number,
    buzzNumber: number,
  ): boolean {
    return number % (fizzNumber * buzzNumber) === 0;
  }
  getFizzBuzz(
    number: number,
    fizzNumber: number,
    buzzNumber: number,
  ): string | number {
    if (this.isFizzBuzz(number, fizzNumber, buzzNumber)) return 'FizzBuzz';
    if (this.isFizz(number, fizzNumber)) return 'Fizz';
    if (this.isBuzz(number, buzzNumber)) return 'Buzz';
    return number;
  }
}
