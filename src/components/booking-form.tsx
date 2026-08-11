// Booking enquiry CTA.
import { FACEBOOK_URL } from "@/lib/site";

export default function BookingForm() {
  return <div className="booking-shell wrap" id="book"><div className="booking-form"><label>Check in<input type="date" name="check-in" aria-label="Check in date" /></label><label>Check out<input type="date" name="check-out" aria-label="Check out date" /></label><label>Guests<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5+">5+ guests</option></select></label><a className="button button-gold" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Message us <span aria-hidden="true">↗</span></a></div></div>;
}
