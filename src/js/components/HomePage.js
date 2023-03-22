import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
    thisHome.changePage();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.homePage);
    homeContainer.appendChild(thisHome.dom);
  }
  changePage() {
    const orderLink = document.querySelector('.order-link');
    const bookingLink = document.querySelector('.booking-link');

    orderLink.addEventListener('click', function (event) {
      event.preventDefault();
    });
    bookingLink.addEventListener('click', function (event) {
      event.preventDefault();
    });
  }
}
export default Home;
