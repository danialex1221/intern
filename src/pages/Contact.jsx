import { useState } from "react";
import { saveMessage } from "../Lib/storage";
import { INFO, useDocumentMeta } from "./shared";

function Contact() {
  useDocumentMeta("Contact ESS - Internship Portal", "Contact the Ethiopian Statistics Service for internship inquiries.");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Valid email required";
    if (!form.subject.trim()) nextErrors.subject = "Required";
    if (form.message.trim().length < 10) nextErrors.message = "Message too short";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    saveMessage(form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="section-pad">
      <div className="ess-container">
        <div className="hero-panel px-6 py-10 text-center md:px-10">
          <span className="section-kicker mx-auto">Get in touch</span>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">Contact ESS</h1>
          <p className="section-copy mx-auto mt-3 text-primary-foreground/88">Reach out for internship inquiries or general questions.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {INFO.map((item) => (
              <div key={item.title} className="feature-card flex gap-4 p-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary-soft text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <div className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
                    {item.lines.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            {sent ? (
              <div className="feature-card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-3xl text-success">✅</div>
                <h2 className="mt-4 text-xl font-bold">Message Sent</h2>
                <p className="mt-2 text-muted-foreground">Thank you for contacting ESS. We'll respond shortly.</p>
                <button onClick={() => setSent(false)} className="btn-outline mt-5">Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="feature-card p-6 md:p-8">
                <h2 className="text-xl font-bold">Send us a message</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <input name="name" value={form.name} onChange={onChange} className="input-field mt-1.5" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} className="input-field mt-1.5" />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium">Subject</label>
                    <input name="subject" value={form.subject} onChange={onChange} className="input-field mt-1.5" />
                    {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={6} className="input-field mt-1.5" />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>
                <button className="btn-primary mt-5">📨 Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
