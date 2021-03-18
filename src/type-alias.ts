type Job = string;
type User = {
  name: string;
  job: Job;
}

const job:Job = 'Developer';
const user1: User = {
  name: 'Kim',
  job
}

type Developer = {name: string; editor: string}
type Designer = {name: string; skech: boolean;}
type DeveloperOrDesigner = Developer | Designer;
type DeveloperAndDesigner = Developer & Designer;

const FullStack: DeveloperOrDesigner = {
  name: 'Kim',
  skech: false
};

// const Publisher: DeveloperAndDesigner = {
//   name: 'Kim'
//   // skech: false
// };

const arrayNumberType: number[] = [];
const arrayNumberType2: Array<number> = [];
arrayNumberType.push(123);
// arrayNumberType.push('123');

const users: [string, number?][] = [
  ['kim'],
  ['park', 30],
  ['choi']
]

const user: [number, boolean, ...string[]] = [30, true, 'kim', 'choi', 'park'];

