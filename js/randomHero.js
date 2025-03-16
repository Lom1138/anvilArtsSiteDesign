const imgPathBack = ['../images/hero/orchestra.Back.jpg','../images/hero/rock.Back.jpg','../images/hero/panto.Back.jpg'];
const imgPathFront = ['../images/hero/orchestra.Front.png','../images/hero/rock.Front.png','../images/hero/panto.Front.png'];
const fonts = ['"Tinos", serif', '"Iceberg", sans-serif','"Chewy", system-ui'];

const randomNum = Math.floor(Math.random() * 3);

const selectedBack = imgPathBack[randomNum];
const selectedFront = imgPathFront[randomNum];
const selectedFont = fonts[randomNum];

const h1Text = document.getElementById('heroText');

document.documentElement.style.setProperty('--heroFront', `url(${selectedFront})`);
document.documentElement.style.setProperty('--heroBack', `url(${selectedBack})`);
h1Text.style.fontFamily = selectedFont;