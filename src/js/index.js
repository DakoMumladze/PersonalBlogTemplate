import 'jquery';
import 'popper.js';
import 'bootstrap';
import '../css/main.scss';
import scrollIntoView from 'scroll-into-view'

const scrollToTop = () => {
  const el = document
    .querySelector('.navbar')

  const options = {
    time: 1000
  }

  scrollIntoView(el, options)  
}

document
  .querySelector('.js-scroll-to-top')
  .addEventListener('click', scrollToTop)