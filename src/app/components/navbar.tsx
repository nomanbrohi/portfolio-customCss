import { Facebook, Instagram, Menu, Linkedin } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function home() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[40%]">
            <h1 className="text-xl font-bold text-[#03045E]">NS</h1>
          </div>
          <div className="hidden w-[60%] justify-between md:flex">
            <div>
              <ul>
                <li className="space-x-6">
                  <Link
                    href="/"
                    className="rounded-md px-4 py-1 hover:bg-[#F5EE84]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-md px-4 py-1 hover:bg-[#F5EE84]"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md px-4 py-1 hover:bg-[#F5EE84]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center gap-5">
              <button>
                <Facebook size={24} className="hover:fill-[#F5EE84] hover:text-[#f5ee84]" />
              </button>
              <button>
                <Instagram size={24} className="hover:fill-[#F5EE84]" />
              </button>
              <button>
                <Linkedin size={24} className="hover:fill-[#F5EE84] hover:text-[#f5ee84]"/>
              </button>
            </div>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <div className="space-y-10 py-16">
                <div>
                  <ul>
                    <li className="flex flex-col items-center gap-10">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center gap-5">
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
