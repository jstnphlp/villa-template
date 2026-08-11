// Responsive site navigation.
"use client";

import { useState } from "react";

const links = [["Our story", "#story"], ["Stays", "#stays"], ["Experiences", "#experiences"], ["Dining", "#dining"], ["Contact", "#contact"]] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-header wrap"><a className="wordmark" href="#top">Azure <i>Cove</i></a><button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span /> <span className="sr-only">Menu</span></button><nav id="site-nav" className={open ? "open" : ""}>{links.map(([name, href]) => <a href={href} onClick={() => setOpen(false)} key={href}>{name}</a>)}<a href="#book" className="nav-book" onClick={() => setOpen(false)}>Book a stay</a></nav></header>;
}
