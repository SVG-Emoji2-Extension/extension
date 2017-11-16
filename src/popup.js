function copyT(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

for (i=0; i<document.getElementsByTagName('button').length; i++) {
  document.getElementsByTagName('button')[i].innerHTML = svg[document.getElementsByTagName('button')[i].getAttribute('data-emoji')];
  document.getElementsByTagName('button')[i].addEventListener('click', function () {
    copyT(this.getAttribute('data-copy'));
  });
  document.getElementsByTagName('button')[i].title = document.getElementsByTagName('button')[i].getAttribute('data-copy');
}
