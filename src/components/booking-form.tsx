// Visit enquiry CTA.
import { MAPS_URL } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export default function BookingForm() {
  return <div className="booking-shell wrap" id="book"><div className="booking-form"><label>Visit date<input type="date" name="visit-date" aria-label="Visit date" /></label><label>Group size<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5+">5+ guests</option></select></label><a className="button button-gold" href={MAPS_URL} target="_blank" rel="noreferrer">Get directions <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.75} /></a></div></div>;
}