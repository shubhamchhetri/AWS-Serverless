var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://i.ap-south-1.amazonaws.com/dev/compare-yourself');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'allow');
xhr.send(JSON.stringify({age: 16, height: 58, income: 2900}));