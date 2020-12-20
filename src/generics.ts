interface OptionItem<T> {
  value: T;
  selected: boolean;
}

const jobs: OptionItem<string>[] = [
  { value: 'Developer', selected: true},
  { value: 'Teacher', selected: false},
  { value: 'Doctor', selected: false},
]
  
const productNumbers: OptionItem<number>[] = [
  { value: 1, selected: true},
  { value: 2, selected: false},
  { value: 3, selected: false},
]

const createItem = (item: OptionItem<string | number>) => {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

jobs.forEach((job) => {
  const item = createItem(job);
  const selectTag = document.querySelector('#job-dropdown');
  selectTag?.appendChild(item)
})

productNumbers.forEach((job) => {
  const item = createItem(job);
  const selectTag = document.querySelector('#job-dropdown');
  selectTag?.appendChild(item)
});

interface LengthType {
  length: number;
}

//제네릭 타입 제한
const getLength = <T extends LengthType>(value: T): T => {
  value.length;
  return value;
}

getLength('user1');
// getLength<string>(['user1', 'user2']);

interface CarInformation {
  brand: string;
  name: string;
  price: number;
}

const getCarInformation = <T extends keyof CarInformation>(value: T): T => {
  return value;
}

getCarInformation('name');
// getCarInformation('name2');
// getCarInformation(1)

const syncFunction = () => {
  const arr = ['hello', '안녕'];
  return arr;
}

const aSyncFunction = ():Promise<string[]> => {
  const arr: string[] = ['hello', '안녕'];
  return new Promise(function(resolve){
    resolve(arr);
  });
}

const result = syncFunction();

interface Option<T> {
  value: T;
  title: string;
}

interface DetailOption<K> extends Option<K> {
  descreption: string;
  name: K;
}

const item: DetailOption<string> = {
  descreption: 'detail',
  name: 'aria',
  value: 'sky',
  title: 'title'
}