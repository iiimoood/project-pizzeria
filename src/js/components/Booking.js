import { templates, select } from './settings.js';
import AmountWidget from './components/AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render();
    thisBooking.initWidgets();
  }
  render(bookingWidgetContainer) {
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget;
    thisBooking.dom = {};
    thisBooking.dom.wrapper = bookingWidgetContainer;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = document.querySelector(
      select.booking.peopleAmount
    );
    thisBooking.dom.hoursAmount = document.querySelector(
      select.booking.hoursAmount
    );
  }
  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.dom.peopleAmount.addEventListener('updated', function () {});
    thisBooking.dom.hoursAmount.addEventListener('updated', function () {});
  }
}
export default Booking;
