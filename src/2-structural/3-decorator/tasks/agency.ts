import { Booking } from "./booking.model";

export class Agency {
  public createBooking(trip: string, price: number): Booking {
    const bookingId = Math.floor(Math.random() * 100);
    const user = "";
    return new Booking(bookingId, trip, user, price, "Pending", new Date(), new Date());
  }
}

// export class AgencyEmailDecorator implements BookingCreator {
//   private agency = new Agency();
//   public createBooking(trip: string, price: number): Booking {
//     return this.agency.createBooking(trip, price);
//   }
//   public createBookingEmail(trip: string, price: number, email?: string): Booking {
//     const bookingId = Math.floor(Math.random() * 100);
//     const user = "";
//     if (email) {
//       console.log("📧 sending email to ", email);
//     }
//     return new Booking(bookingId, trip, user, price, "Pending", new Date(), new Date());
//   }
// }
