import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <>
      <div className="flex">
        <div>
          <Image
            src="/logo.webp"
            alt="panaverse_logo"
            width={120}
            height={120}
          ></Image>
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Explore</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-blue-600 px-6">Apply</button>
        </div>
      </div>
    </>
  );
}
