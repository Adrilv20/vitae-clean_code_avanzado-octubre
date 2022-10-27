// ! npm run 3-2-3
import { Booking } from "./agency";
import { AgencyObservable } from "./agency.subject";
import { EmailObserver, LoggerObserver } from "./logger.observer";

export class Application {
  private agencyObservable: AgencyObservable;
  constructor() {
    // ToDo: subscription could be done in a separate class...
    this.agencyObservable = new AgencyObservable();
    const loggerObserver = new LoggerObserver();
    const emailObserver = new EmailObserver();
    // * the subject will notify the observers
    this.agencyObservable.subscribe(loggerObserver);
    this.agencyObservable.subscribeBusiness(emailObserver);
  }
  public bookTrip(trip: string, price: number): Booking | undefined {
    return this.agencyObservable.createBooking(trip, price);
  }
  public cancelBooking(booking: Booking): Booking | undefined {
    return this.agencyObservable.cancelBooking(booking);
  }
}
// main program
const application = new Application();
const booking = application.bookTrip("Paris", 100);
if (booking) {
  application.cancelBooking(booking);
}
const badBooking = application.bookTrip("Paris", -1); // throws error
if (badBooking) {
  application.cancelBooking(badBooking);
}
