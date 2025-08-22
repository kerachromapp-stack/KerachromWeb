"use client";

import type React from "react";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border bg-white ${className}`}>{children}</div>
  );
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function Button({
  children,
  className = "",
  style = {},
  type = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}) {
  return (
    <button
      type={type}
      className={`rounded-lg px-4 py-2 font-medium transition-colors hover:opacity-90 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative z-10">
        {/* Header */}
        <header className="relative border-b border-gray-100">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/contact.jpg')",
            }}
          />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative mx-auto max-w-4xl px-6 py-8">
            <h1 className="text-center text-4xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white">
              We'd love to hear from you. Get in touch with us and we'll respond
              as soon as possible.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                  Get in Touch
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Have a question or want to work together? We're here to help.
                  Reach out to us through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#d9224c" }}
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:scaraalex@gmail.com"
                      className="cursor-pointer text-gray-600 transition-colors hover:text-[#d9224c]"
                    >
                      scaraalex@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#d9224c" }}
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+393291448595"
                      className="cursor-pointer text-gray-600 transition-colors hover:text-[#d9224c]"
                    >
                      +39 (329) 144-8595
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#d9224c" }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Address
                    </h3>
                    <p className="text-gray-600">via Cirigliano c.p. 3 Pini</p>
                    <p className="text-gray-600">Aversa (Caserta)</p>
                    <p className="text-gray-600">Italy</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                    Find Us
                  </h2>
                  <div className="space-y-4">
                    <div className="h-80 w-full overflow-hidden rounded-lg border border-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8234567890123!2d14.2067!3d40.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0c8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sVia%20Cirigliano%2C%2081031%20Aversa%20CE%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location - via Cirigliano c.p. 3 Pini, Aversa (Caserta), Italy"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        <strong>Our Location:</strong> via Cirigliano c.p. 3
                        Pini, Aversa (Caserta), Italy
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Click and drag to explore the map
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
