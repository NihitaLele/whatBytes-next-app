import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-[#002B5A] mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-[#0758A8] text-white rounded-lg hover:bg-[#064a89] transition"
      >
        Go back home
      </Link>
    </div>
  );
}
