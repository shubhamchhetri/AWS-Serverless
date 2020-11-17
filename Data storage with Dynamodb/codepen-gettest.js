var xhr = new XMLHttpRequest();
xhr.open('GET', 'https:');
xhr.onreadystatechange = function (event) {
  console.log(JSON.parse(event.target.response));
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();