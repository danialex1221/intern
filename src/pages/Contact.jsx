import { useState } from "react";
import { Landmark, Mail, Phone, Clock } from "lucide-react";
import { saveMessage } from "../Lib/storage";
import { INFO, useDocumentMeta } from "./shared";

function Contact() {
  useDocumentMeta(
    "Contact ESS - Internship Portal",
    "Contact the Ethiopian Statistics Service for internship inquiries."
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Valid email required";
    if (!form.subject.trim()) nextErrors.subject = "Required";
    if (form.message.trim().length < 10)
      nextErrors.message = "Message too short";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    saveMessage(form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  // Helper mapping function to assign the corrected institutional icons
  const getIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("head office") || lowerTitle.includes("address") || lowerTitle.includes("hq")) {
      return <Landmark className="h-5 w-5 text-primary" />;
    }
    if (lowerTitle.includes("email")) {
      return <Mail className="h-5 w-5 text-primary" />;
    }
    if (lowerTitle.includes("phone") || lowerTitle.includes("call")) {
      return <Phone className="h-5 w-5 text-primary" />;
    }
    if (lowerTitle.includes("hour") || lowerTitle.includes("time") || lowerTitle.includes("working")) {
      return <Clock className="h-5 w-5 text-primary" />;
    }
    return null;
  };

  return (
    <section className="section-pad">
      <div className="ess-container">

        {/* HERO */}
        <div className="hero-panel px-6 py-10 text-center md:px-10">
          <span className="section-kicker mx-auto">Get in touch</span>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">
            Contact ESS
          </h1>
          <p className="section-copy mx-auto mt-3 text-primary-foreground/88">
            Reach out for internship inquiries or general questions.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          
          {/* INFO SECTION */}
          <div className="space-y-4 md:col-span-2">
            {INFO.map((item) => (
              <div key={item.title} className="feature-card p-5 flex items-start gap-4">
                {/* Dynamically inserted wrapper icon */}
                <div className="p-2 bg-primary/10 rounded-md shrink-0">
                  {getIcon(item.title)}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-primary">
                    {item.title}
                  </h3>

                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FORM SECTION */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="feature-card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-3xl text-success">
                  ✅
                </div>

                <h2 className="mt-4 text-xl font-bold">
                  Message Sent
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Thank you for contacting ESS. We'll respond shortly.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="btn-outline mt-5"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="feature-card p-6 md:p-8">
                <h2 className="text-xl font-bold">
                  Send us a message
                </h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      className="input-field mt-1.5"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      className="input-field mt-1.5"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      className="input-field mt-1.5"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={6}
                      className="input-field mt-1.5"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                </div>

                <button className="btn-primary mt-5">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;