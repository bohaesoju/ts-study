// const jobs = [
//   { value: 'Developer', selected: true},
//   { value: 'Teacher', selected: false},
//   { value: 'Ceo', selected: false},
// ]

// const productNumbers = [
//   { value: 1, selected: true},
//   { value: 2, selected: false},
//   { value: 3, selected: false},
// ]

// const createItem = (item) => {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// jobs.forEach((job) => {
//   const item = createItem(job);
//   const selectTag = document.querySelector('#job-dropdown');
//   selectTag.appendChild(item)
// })