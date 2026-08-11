// Villa Scarlet Garden Resort's single-page marketing route.
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BookingForm from "@/components/booking-form";
import Navigation from "@/components/navigation";
import { MAPS_URL, images, reviews, stays } from "@/lib/site";

function Arrow() {
  return <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.75} />;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image src={images.hero} alt="A garden-resort escape in Batangas" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <Navigation />
        <div className="hero-copy wrap">
          <p className="eyebrow light">Balibago, Balayan, Batangas</p>
          <h1>Make room for<br />good times together.</h1>
          <p className="hero-intro">Villa Scarlet Garden Resort is a relaxed garden escape for family days, group getaways, and celebrations in Balayan.</p>
          <a className="text-link light" href="#story">Discover the resort <Arrow /></a>
        </div>
        <BookingForm />
      </section>

      <section className="story wrap" id="story">
        <div className="story-photo"><Image src={images.story} alt="A quiet garden setting for a resort escape" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="story-copy">
          <p className="eyebrow">Welcome to Villa Scarlet</p>
          <h2>A garden escape in the heart of Balayan.</h2>
          <p>Set along the Balibago - Balayan Highway, Villa Scarlet Garden Resort offers a welcoming setting to slow down, reconnect, and enjoy the day with the people who matter most.</p>
          <a className="text-link" href="#stays">Explore the spaces <Arrow /></a>
        </div>
      </section>

      <section className="stays" id="stays">
        <div className="wrap section-heading"><div><p className="eyebrow">Find your space</p><h2>Easy days, shared your way.</h2></div><p>From laid-back escapes to memorable gatherings, there is room here to simply be together.</p></div>
        <div className="stay-grid wrap">
          {stays.map((stay) => <article className="stay-card" key={stay.name}><div className="card-image"><Image src={stay.image} alt={stay.name} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="stay-caption"><div><h3>{stay.name}</h3><p>{stay.detail}</p></div><a aria-label={`Learn about ${stay.name}`} href="#contact" className="round-button"><Arrow /></a></div></article>)}
        </div>
      </section>

      <section className="reviews" id="reviews"><div className="wrap"><p className="eyebrow centered">Guest notes</p><h2 className="centered">Moments worth returning to.</h2><div className="review-grid">{reviews.map(([quote, name], index) => <blockquote key={`${name}-${index}`}><span className="quote-mark">&ldquo;</span><p>{quote}</p><footer>{name}</footer></blockquote>)}</div></div></section>
      <section className="split-feature" id="experiences"><div className="feature-image"><Image src={images.events} alt="A joyful garden gathering" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">Gather together</p><h2>Bring your favorite people along.</h2><p>Birthdays, reunions, and simple weekends become more memorable when everyone has space to relax and enjoy the moment.</p><a className="button button-dark" href="#contact">Plan your gathering <Arrow /></a></div></section>

      <section className="split-feature reverse" id="dining"><div className="feature-image"><Image src={images.dining} alt="A sunny space for unwinding" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">A day to unwind</p><h2>Set your own pace.</h2><p>Spend unhurried time outdoors, catch up over good food, and let a change of scenery do the rest.</p><a className="button button-dark" href="#contact">Find the resort <Arrow /></a></div></section>

      <section className="amenities" id="amenities"><div className="wrap section-heading"><div><p className="eyebrow">The good life</p><h2>A refreshing change of scenery.</h2></div><a className="text-link" href="#contact">Plan your visit <Arrow /></a></div><div className="amenity-grid wrap"><article><div className="amenity-image"><Image src={images.pool} alt="A refreshing resort pool" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><h3>Poolside moments</h3></article><article><div className="amenity-image"><Image src={images.spa} alt="A peaceful garden resort atmosphere" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><h3>Garden atmosphere</h3></article><article className="amenity-text"><p className="eyebrow">Your day, your way</p><h3>Come together for relaxed escapes, celebrations, and time well spent.</h3><a className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Get directions <Arrow /></a></article></div></section>

      <section className="contact" id="contact"><div className="wrap contact-grid"><div><p className="eyebrow light">Find us</p><h2>Your next garden escape<br />is closer than you think.</h2></div><div className="contact-details"><p>Balibago - Balayan Highway<br />Balibago, Balayan, Batangas, Philippines</p><p>Plan your visit or get directions through our Google Maps listing.</p><a className="button button-gold" href={MAPS_URL} target="_blank" rel="noreferrer">Open in Google Maps <Arrow /></a></div></div></section>
      <footer className="site-footer wrap"><a className="wordmark dark" href="#top">Villa Scarlet <i>Garden Resort</i></a><p>&copy; {new Date().getFullYear()} Villa Scarlet Garden Resort.</p><div><a href={MAPS_URL} target="_blank" rel="noreferrer">Google Maps</a><a href="#top">Back to top</a></div></footer>
    </main>
  );
}