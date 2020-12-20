var jobs = [
    { value: 'Developer', selected: true },
    { value: 'Teacher', selected: false },
    { value: 'Doctor', selected: false },
];
var productNumbers = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];
var createItem = function (item) {
    var option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
};
jobs.forEach(function (job) {
    var item = createItem(job);
    var selectTag = document.querySelector('#job-dropdown');
    selectTag === null || selectTag === void 0 ? void 0 : selectTag.appendChild(item);
});
productNumbers.forEach(function (job) {
    var item = createItem(job);
    var selectTag = document.querySelector('#job-dropdown');
    selectTag === null || selectTag === void 0 ? void 0 : selectTag.appendChild(item);
});
//제네릭 타입 제한
var getLength = function (value) {
    value.length;
    return value;
};
getLength('user1');
var getCarInformation = function (value) {
    return value;
};
getCarInformation('name');
// getCarInformation('name2');
// getCarInformation(1)
var syncFunction = function () {
    var arr = ['hello', '안녕'];
    return arr;
};
var aSyncFunction = function () {
    var arr = ['hello', '안녕'];
    return new Promise(function (resolve) {
        resolve(arr);
    });
};
var result = syncFunction();
var item = {
    descreption: 'detail',
    name: 'aria',
    value: 'sky',
    title: 'title'
};
