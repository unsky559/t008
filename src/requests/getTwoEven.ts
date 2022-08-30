import getRandom from './getRandom';

/*
* Imitates image loading process.
* Returns true if both of random numbers from `getRandom()` function are even
* Making another request recursively while two numbers is not even
* */
export default async function getTwoEven(): Promise<boolean> {
  const results = await Promise.all([getRandom(), getRandom()]);
  const isAllEven = results.every((elem: number) => elem % 2 === 0);

  if (!isAllEven) {
    return getTwoEven();
  }
  return true;
}
