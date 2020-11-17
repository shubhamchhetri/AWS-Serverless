var xhr = new XMLHttpRequest();
xhr.open('POST', 'https:/');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({age: 26, height: 81, income: 2100}));