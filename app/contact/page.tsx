"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Enquiry sent!");
    } else {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Your Name" className="border p-3 rounded" required />
        <input name="phone" placeholder="Contact Number" className="border p-3 rounded" />
        <input name="email" type="email" placeholder="Your Email" className="border p-3 rounded" required />
        <textarea name="message" placeholder="Your Enquiry" className="border p-3 rounded h-32" required />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}