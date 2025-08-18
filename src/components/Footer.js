import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002C61] px-9 text-slate-100 mt-6">
      <div className="container-limit  grid md:grid-cols-3 gap-8 py-4">
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">Filters</h3>
          <p>All</p>
          <p>Electronics</p>
          <p>Clothing</p>
          <p>Home</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">About Us</h3>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-[18px]">Follow Us</h3>
          <div className="flex gap-3"> 
            <Facebook/> <Twitter/> <Instagram/>
         </div>
        </div>
      </div>
      <div className="container-limit pb-3 text-xs text-slate-400">© 2024 American</div>
    </footer>
  );
}