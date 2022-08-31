export default class randomService {
  /*
  * Returns random number
  * */
  static async getRandom(): Promise<number> {
    const result = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new');
    const data = await result.text();
    return Number(data);
  }

  /*
  * Imitates image loading process.
  * Returns true if both of random numbers from `randomService.getRandom()` function are even
  * Making another request recursively while two numbers is even
  * */
  static async awaitTwoEven(): Promise<true> {
    const results = await Promise.all([this.getRandom(), this.getRandom()]);
    const isAllEven = results.every((elem: number) => elem % 2 === 0);

    if (!isAllEven) {
      return this.awaitTwoEven();
    }
    return true;
  }
}
