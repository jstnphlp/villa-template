// Responsive site navigation.
"use client";

import { useState } from "react";
import Image from "next/image";
import villaLogo from "@/public/villa-logo.png";

const links = [["Our resort", "#story"], ["Spaces", "#stays"], ["Gatherings", "#experiences"], ["Guest notes", "#reviews"], ["Location", "#contact"]] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-header wrap"><a className="wordmark" href="#top"><Image src={villaLogo} alt="Villa Scarlet Garden Resort logo" width={38} height={38} className="wordmark-logo" />Villa Scarlet <i>Garden Resort</i></a><button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span /> <span className="sr-only">Menu</span></button><nav id="site-nav" className={open ? "open" : ""}>{links.map(([name, href]) => <a href={href} onClick={() => setOpen(false)} key={href}>{name}</a>)}<a href="#book" className="nav-book" onClick={() => setOpen(false)}>Plan a visit</a></nav></header>;
}