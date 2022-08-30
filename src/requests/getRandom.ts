export default async function getRandom() {
  const result = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new');
  const data = await result.text();
  return Number(data);
}
