const spriteFile = new XMLHttpRequest();
spriteFile.open("GET", "./sprite.svg", true);
spriteFile.onreadystatechange = function () {
  const spriteReadyState = spriteFile.readyState === 4 && spriteFile.status === 200;
  if (spriteReadyState) {
    document.getElementById('svg-sprite').innerHTML = spriteFile.responseText;
  }
};
spriteFile.send(null);
