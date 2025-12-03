"use client";

import React from "react";
import { DesignForm } from "@/components/DesignForm"; // adjust path if needed
import { NavbarWithBgColor } from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function SubmitPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <NavbarWithBgColor />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-6 text-2xl font-semibold">Submit Your Design</h1>
        {/* DesignForm is a client component (uses useState) */}
        <DesignForm />
      </main>
      <Footer />
    </div>
  );
}