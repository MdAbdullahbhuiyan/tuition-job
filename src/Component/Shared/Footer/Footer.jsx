"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo2.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0078C3] text-white pt-14 pb-6 px-5 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
            src={logo}
              width={180}
              height={50}
              className="rounded-2xl"
              alt="Caretutors Logo"
            />
          </div>
          <p className="text-sm leading-6">
            Caretutors was founded in 2012. It is Bangladeshs first, most trusted
            and leading online platform for guardians, students, and tutors to
            hire verified tutors or find tuition jobs in 13 different categories
            from anywhere in the country.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Terms and Conditions</Link></li>
            <li><Link href="#">Become a Tutor</Link></li>
            <li><Link href="#">Hire a Tutor</Link></li>
            <li><Link href="#">Tutorial</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Caretutors Merchant</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Social</h3>
          <div className="flex gap-4 text-white text-2xl mb-6">
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaYoutube /></Link>
            <Link href="#"><FaLinkedin /></Link>
            <Link href="#"><FaTiktok /></Link>
          </div>

          <h3 className="font-semibold text-lg mb-3">Join Our Community</h3>
          <div className="space-y-3 flex gap-3 items-center">
            <Image
              src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/icon/Tutor_Community.svg"
              width={120}
              height={50}
              alt="Tutor Community"
            />
            <Image
              src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/icon/Guardians_Community.svg"
              width={120}
              height={50}
              alt="Guardian Community"
            />
          </div>

          <h3 className="font-semibold text-lg mt-5 mb-3">Download Our App</h3>
          <div className="flex gap-3 items-center">
            <Image
              src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/landing-page/playStore.svg"
              width={120}
              height={40}
              alt="Google Play"
            />
            <Image
              src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/landing-page/appStore.svg"
              width={120}
              height={40}
              alt="App Store"
            />
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company Info</h3>
          <p className="text-sm">
            Trade licence No : <br />
            <span className="font-semibold">TRAD/DNCC/095492/2022</span>
          </p>
          <p className="text-sm mt-2">
            E-TIN Number : <span className="font-semibold">435024284395</span>
          </p>
          <p className="text-sm mt-2">
            BIN Number : <span className="font-semibold">003669024-0102</span>
          </p>

          <h3 className="font-semibold text-lg mt-5 mb-2">Office Address</h3>
          <p className="text-sm leading-6">
            Level: 2, Rangs Naharz, House: 14, <br />
            Road: Shahjalal Avenue, Sector 4, <br />
            Uttara, Dhaka 1230, Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-sm opacity-90">
        Copyright © 2012-2025 Caretutors Technologies Ltd. 
        All Rights Reserved. <br />
        Web App Version: 7.18.33
      </div>

      <p className="text-xs mt-4 text-center opacity-80">
        Disclaimer: Caretutors is an online platform that connects learners with tutors.
        Caretutors does not provide tuition services directly.
      </p>
    </footer>
  );
}
