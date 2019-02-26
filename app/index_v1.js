function component() {
  var element = document.createElement('div');
  element.innerHTML = 'Hello Clivia';
  return element;
}

document.body.appendChild(component());