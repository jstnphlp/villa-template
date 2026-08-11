// Azure Cove's single-page marketing route.
import Image from "next/image";
import BookingForm from "@/components/booking-form";
import Navigation from "@/components/navigation";
import { FACEBOOK_URL, images, reviews, stays } from "@/lib/site";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image src={images.hero} alt="A sunlit tropical villa by the water" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <Navigation />
        <div className="hero-copy wrap">
          <p className="eyebrow light">Lian, Batangas · Philippines</p>
          <h1>Where the sea<br />sets the pace.</h1>
          <p className="hero-intro">A private coastal hideaway for long lunches, saltwater swims, and the simple luxury of unhurried days.</p>
          <a className="text-link light" href="#story">Discover the cove <Arrow /></a>
        </div>
        <BookingForm />
      </section>

      <section className="story wrap" id="story">
        <div className="story-photo"><Image src={images.story} alt="A tranquil villa terrace surrounded by palms" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="story-copy">
          <p className="eyebrow">Welcome to Azure Cove</p>
          <h2>Find your own rhythm by the shore.</h2>
          <p>Set between gentle hills and the open sea, Azure Cove is a small collection of villas made for quiet escapes. Here, nature is not a view—it is the atmosphere of every stay.</p>
          <a className="text-link" href="#stays">Explore our stays <Arrow /></a>
        </div>
      </section>

      <section className="stays" id="stays">
        <div className="wrap section-heading"><div><p className="eyebrow">Stay your way</p><h2>Spaces with room to exhale.</h2></div><p>Thoughtfully designed retreats for couples, families, and everyone in between.</p></div>
        <div className="stay-grid wrap">
          {stays.map((stay) => <article className="stay-card" key={stay.name}><div className="card-image"><Image src={stay.image} alt={stay.name} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="stay-caption"><div><h3>{stay.name}</h3><p>{stay.detail}</p></div><a aria-label={`Learn about ${stay.name}`} href="#contact" className="round-button"><Arrow /></a></div></article>)}
        </div>
      </section>

      <section className="split-feature" id="experiences"><div className="feature-image"><Image src={images.events} alt="An intimate dinner gathering by the sea" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">Gather by the water</p><h2>Moments worth making an occasion of.</h2><p>From barefoot vows to sunset birthdays and close-knit retreats, we make space for the celebrations that matter.</p><a className="button button-dark" href="#contact">Plan an occasion <Arrow /></a></div></section>

      <section className="split-feature reverse" id="dining"><div className="feature-image"><Image src={images.dining} alt="A tropical pool beside the coast" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">From our kitchen</p><h2>Sea, soil, and something to savor.</h2><p>Fresh coastal ingredients, generous tables, and a menu that follows the day from coffee at sunrise to cocktails at golden hour.</p><a className="button button-dark" href="#contact">Discover dining <Arrow /></a></div></section>

      <section className="reviews" id="reviews"><div className="wrap"><p className="eyebrow centered">Guest notes</p><h2 className="centered">Words from the cove.</h2><div className="review-grid">{reviews.map(([quote, name]) => <blockquote key={name}><span className="quote-mark">“</span><p>{quote}</p><footer>{name}</footer></blockquote>)}</div></div></section>

      <section className="amenities" id="amenities"><div className="wrap section-heading"><div><p className="eyebrow">The good life</p><h2>Little luxuries, naturally.</h2></div><a className="text-link" href="#contact">See all amenities <Arrow /></a></div><div className="amenity-grid wrap"><article><div className="amenity-image"><Image src={images.pool} alt="Infinity pool looking onto greenery" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><h3>Infinity pool</h3></article><article><div className="amenity-image"><Image src={images.spa} alt="Relaxing spa treatment" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><h3>In-villa wellness</h3></article><article className="amenity-text"><p className="eyebrow">Slow days, your way</p><h3>Kayaks, bonfires, island picnics, and hidden corners to do nothing at all.</h3><a className="text-link" href="#contact">Make an enquiry <Arrow /></a></article></div></section>

      <section className="contact" id="contact"><div className="wrap contact-grid"><div><p className="eyebrow light">Find us</p><h2>Your next escape<br />is closer than you think.</h2></div><div className="contact-details"><p>San Diego, Lian<br />Batangas, Philippines</p><p><a href="tel:+639001234567">+63 900 123 4567</a><br /><a href="mailto:stay@azurecovevillas.com">stay@azurecovevillas.com</a></p><a className="button button-gold" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Message us <Arrow /></a></div></div></section>
      <footer className="site-footer wrap"><a className="wordmark dark" href="#top">Azure <i>Cove</i></a><p>© {new Date().getFullYear()} Azure Cove Villas.</p><div><a href="#top">Instagram</a><a href="#top">Privacy</a></div></footer>
    </main>
  );
}
