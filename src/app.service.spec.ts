import { AppService } from './app.service';
import { Test } from '@nestjs/testing';
import { FizzBuzz } from './FizzBuzz';

describe('appService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppService, FizzBuzz],
    }).compile();

    appService = await module.get<AppService>(AppService);
  });

  it('given a list of numbers with no match in Fizz or Buzz, return the same list of numbers', () => {
    expect(appService.generateFizzBuzzList([4, 8])).toStrictEqual([4, 8]);
  });
  it('given a list of numbers with match in Fizz, return the same list of numbers replacing the matchs with Fizz', () => {
    expect(appService.generateFizzBuzzList([4, 3])).toStrictEqual([4, 'Fizz']);
  });
  it('given a list of numbers with match in Buzz, return the same list of numbers replacing the matchs with Buzz', () => {
    expect(appService.generateFizzBuzzList([4, 5])).toStrictEqual([4, 'Buzz']);
  });
  it('given a list of numbers with match in FizzBuzz, return the same list of numbers replacing the match with FizzBuzz', () => {
    expect(appService.generateFizzBuzzList([4, 15])).toStrictEqual([
      4,
      'FizzBuzz',
    ]);
  });
});
