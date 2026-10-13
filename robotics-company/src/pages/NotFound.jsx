import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-[10rem] md:text-[14rem] font-display font-bold leading-none text-base-steel tracking-tighter mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">Signal Lost</h2>
      <p className="text-neutral-gray max-w-md mb-10">The page you are looking for does not exist or has been moved. Return to base station.</p>
      <Link to="/" className="inline-block border border-neutral-line text-neutral-white px-8 py-3 font-display font-bold uppercase tracking-widest text-sm hover:border-accent-orange hover:text-accent-orange transition-colors">Back to Home</Link>
    </div>
  );
}