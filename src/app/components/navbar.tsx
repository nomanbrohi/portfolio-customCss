import { Facebook, Instagram, Menu, Linkedin } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function home() {
  return (
    <section className="navbar-section">
      <div className="container">
        <div className="navbar-container">
          <div className="navbar-logo">NS</div>
          <div className="navbar-links-container">
            <div>
              <ul className="navbar-links">
                <li>
                  <Link href="/" className="navbar-link">
                    Home
                  </Link>
                  <Link href="/about" className="navbar-link">
                    About
                  </Link>
                  <Link href="/contact" className="navbar-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-icons">
              <button className="navbar-icon-button">
                <Facebook size={24} className="navbar-icon" />
              </button>
              <button className="navbar-icon-button">
                <Instagram size={24} className="navbar-icon" />
              </button>
              <button className="navbar-icon-button">
                <Linkedin size={24} className="navbar-icon" />
              </button>
            </div>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <div className="mobile-menu">
                <div>
                  <ul className="mobile-links">
                    <li>
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="mobile-icons">
                  <button>
                    <Facebook size={24} />
                  </button>
                  <button>
                    <Instagram size={24} />
                  </button>
                  <button>
                    <Linkedin size={24} />
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
