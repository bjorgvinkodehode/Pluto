







window.addEventListener('scroll', function() {
  let image1 = document.querySelector('.image1');
  const position1 = image1.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position1 < screenPosition) {
    image1.classList.add('drop');
  } else {
    image1.classList.remove('drop');
  }

  let image2 = document.querySelector('.image2');
  const position2 = image2.getBoundingClientRect().top;

  if (position2 < screenPosition) {
    image2.classList.add('drop');
  } else {
    image2.classList.remove('drop');
  }

  let image3 = document.querySelector('.image3');
  const position3 = image3.getBoundingClientRect().top;

  if (position3 < screenPosition) {
    image3.classList.add('drop');
  } else {
    image3.classList.remove('drop');
  }

  let image4 = document.querySelector('.image4');
  const position4 = image4.getBoundingClientRect().top;

  if (position4 < screenPosition) {
    image4.classList.add('drop');
  } else {
    image4.classList.remove('drop');
  }

  let image5 = document.querySelector('.image5');
  const position5 = image5.getBoundingClientRect().top;

  if (position5 < screenPosition) {
    image5.classList.add('drop');
  } else {
    image5.classList.remove('drop');
  }
});




window.addEventListener('scroll', function() {
  let text1 = document.getElementById('text1');
  const position1 = text1.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position1 < screenPosition) {
    text1.style.opacity = '1';
    text1.style.transform = 'translateX(0)';
  } else {
    text1.style.opacity = '0';
    text1.style.transform = 'translateX(-100%)';
  }

  let text2 = document.getElementById('text2');
  const position2 = text2.getBoundingClientRect().top;

  if (position2 < screenPosition) {
    text2.style.opacity = '1';
    text2.style.transform = 'translateX(0)';
  } else {
    text2.style.opacity = '0';
    text2.style.transform = 'translateX(-100%)';
  }

  let text3 = document.getElementById('text3');
  const position3 = text3.getBoundingClientRect().top;

  if (position3 < screenPosition) {
    text3.style.opacity = '1';
    text3.style.transform = 'translateX(0)';
  } else {
    text3.style.opacity = '0';
    text3.style.transform = 'translateX(-100%)';
  }

  let text4 = document.getElementById('text4');
  const position4 = text4.getBoundingClientRect().top;

  if (position4 < screenPosition) {
    text4.style.opacity = '1';
    text4.style.transform = 'translateX(0)';
  } else {
    text4.style.opacity = '0';
    text4.style.transform = 'translateX(-100%)';
  }

  let text5 = document.getElementById('text5');
  const position5 = text5.getBoundingClientRect().top;

  if (position5 < screenPosition) {
    text5.style.opacity = '1';
    text5.style.transform = 'translateX(0)';
  } else {
    text5.style.opacity = '0';
    text5.style.transform = 'translateX(-100%)';
  }

  let text6 = document.getElementById('text6');
  const position6 = text6.getBoundingClientRect().top;

  if (position6 < screenPosition) {
    text6.style.opacity = '1';
    text6.style.transform = 'translateX(0)';
  } else {
    text6.style.opacity = '0';
    text6.style.transform = 'translateX(-100%)';
  }

  let text7 = document.getElementById('text7');
  const position7= text7.getBoundingClientRect().top;
  
  if (position7< screenPosition) {
    text7.style.opacity= '1';
    text7.style.transform= 'translateX(0)';
  } else {
    text7.style.opacity= '0';
    text7.style.transform= 'translateX(-100%)'
  }

  let text8= document.getElementById('text8');
  const position8= text8.getBoundingClientRect().top;

  if (position8< screenPosition) {
    text8.style.opacity= '1';
    text8.style.transform= 'translateX(0)';
  } else {
    text8.style.opacity= '0';
    text8.style.transform= 'translateX(-100%)'
  }

  let text9= document.getElementById('text9');
  const position9= text9.getBoundingClientRect().top;

  if (position9 < screenPosition) {
    text9.style.opacity= '1';
    text9.style.transform= 'translateX(0)';
  } else {
    text9.style.opacity= '0';
    text9.style.transform= 'translateX(-100%)'
  }

  let text10= document.getElementById('text10');
  const position10= text10.getBoundingClientRect().top;

  if (position10 < screenPosition) {
    text10.style.opacity= '1';
    text10.style.transform= 'translateX(0)';
  } else {
    text10.style.opacity= '0';
    text10.style.transform= 'translateX(-100%)'
  }

});
