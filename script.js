var imagetip = document.getElementById('imagetip');
var imagetipLink = document.getElementById('imagetip-link');
var imagetipContent = document.getElementById('imagetip-content');
var image = document.querySelector('img');

image.addEventListener('mousemove', function(e) {
  var hotspot = e.target;
  var x = e.offsetX;
  var y = e.offsetY;

  imagetip.style.display = 'block';
  imagetip.style.top = e.clientY + 'px';
  imagetip.style.left = e.clientX + 'px';

  imagetipContent.innerHTML = ''; // Clear previous content

  var popupImage = document.createElement('img');
  popupImage.src = hotspot.popimg;
  console.log("jax: img is " + hotspot.href)
  popupImage.alt = 'Popup Image';

  imagetipContent.appendChild(popupImage);

  imagetipLink.href = hotspot.href;

  imagetip.addEventListener('mousemove', function() {
    imagetip.style.display = 'block';
  });
});

image.addEventListener('mouseleave', function() {
  imagetip.style.display = 'none';
});
