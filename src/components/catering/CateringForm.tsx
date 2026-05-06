"use client";

import { useState } from "react";

const EVENT_TYPES = [
  "Wedding",
  "Corporate Lunch",
  "Ramadan Iftar",
  "Eid Celebration",
  "Birthday / Family Party",
  "Baby Shower",
  "Other",
];

export default function CateringForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Catering Inquiry — ${data.get("eventType")} for ${data.get("guests")} guests`;
    const body = `Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Event Type: ${data.get("eventType")}
Date: ${data.get("date")}
Guests: ${data.get("guests")}

Message:
${data.get("message")}`;
    window.location.href = `mailto:info@al-baghdady.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text)] transition-colors focus:outline-none focus:border-[var(--color-text)]";
  const labelCls = "block text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2";

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-section)] border border-[var(--color-border)] bg-[var(--color-warm-white)] p-10 text-center">
        <h3 className="!text-2xl mb-3">Thank you.</h3>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          Your email client should have opened. If not, please email us directly at{" "}
          <a href="mailto:info@al-baghdady.com" className="text-[var(--color-primary)] underline">
            info@al-baghdady.com
          </a>{" "}
          or call (972) 238-9200.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-section)] border border-[var(--color-border)] bg-[var(--color-warm-white)] p-7 md:p-10 grid gap-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Your Name *</span>
          <input name="name" required type="text" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Email *</span>
          <input name="email" required type="email" className={inputCls} />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Phone *</span>
          <input name="phone" required type="tel" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Event Type *</span>
          <select name="eventType" required className={inputCls}>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Event Date</span>
          <input name="date" type="date" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Guest Count *</span>
          <input name="guests" required type="number" min={5} placeholder="e.g. 50" className={inputCls} />
        </label>
      </div>

      <label className="block">
        <span className={labelCls}>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your event — preferred dishes, dietary needs, delivery vs. pickup, etc."
          className={inputCls}
        />
      </label>

      <button type="submit" className="btn-primary justify-center mt-2">
        Send Catering Inquiry
      </button>

      <p className="text-xs text-[var(--color-text-muted)] text-center">
        We&apos;ll respond within one business day. For urgent requests, please call (972) 238-9200.
      </p>
    </form>
  );
}
