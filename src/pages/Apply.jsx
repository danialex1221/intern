import { useState } from "react";
import { Link } from "react-router-dom";
import { ACADEMIC_YEARS, DEPARTMENTS, useDocumentMeta } from "./shared";
import { saveApplication } from "../Lib/storage";

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  university: "",
  fieldOfStudy: "",
  academicYear: "",
  department: "",
  startDate: "",
  coverLetter: null,
};

function Apply() {
  useDocumentMeta(
    "Apply for Internship - ESS",
    "Submit your internship application to the Ethiopian Statistics Service."
  );

  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onChange = (event) => {
    const { name, value, files, type } = event.target;

    if (type === "file") {
      const file = files[0];
      setForm({
        ...form,
        [name]: file,
      });

      // Generate preview URL if it's an image
      if (file && file.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setPreviewUrl(null); // Clear preview for non-image files like PDFs/Docs
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.firstName.trim())
      nextErrors.firstName = "First name is required";

    if (!form.lastName.trim())
      nextErrors.lastName = "Last name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Valid email is required";

    if (!/^[+0-9\-\s()]{7,20}$/.test(form.phone))
      nextErrors.phone = "Valid phone is required";

    if (!form.university.trim())
      nextErrors.university = "University is required";

    if (!form.fieldOfStudy.trim())
      nextErrors.fieldOfStudy = "Field of study is required";

    if (!form.academicYear)
      nextErrors.academicYear = "Select academic year";

    if (!form.department)
      nextErrors.department = "Select a department";

    if (!form.startDate)
      nextErrors.startDate = "Pick a start date";

    return nextErrors;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const record = saveApplication(form);

    setSubmitted(record);
    setForm(EMPTY);
    setPreviewUrl(null); // Reset the image preview on success

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (submitted) {
    return (
      <section className="section-pad">
        <div className="ess-container max-w-2xl">
          <div className="hero-panel px-6 py-10 text-center md:px-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-3xl text-success">
              ✅
            </div>

            <h1 className="mt-4 text-2xl font-bold">
              Application Submitted
            </h1>

            <p className="mt-2 text-muted-foreground">
              Your internship application has been received successfully.
            </p>

            <div className="mt-6 rounded-md bg-white/10 p-4 text-left backdrop-blur">
              <div className="text-xs text-muted-foreground">
                Your Application ID
              </div>

              <div className="mt-1 font-mono text-lg font-bold text-primary">
                {submitted.id}
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                Save this ID. Use it or your email to check your application
                status.
              </p>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/status"
                className="btn-primary bg-accent text-accent-foreground"
              >
                🔍 Check Status
              </Link>

              <button
                onClick={() => setSubmitted(null)}
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad">
      <div className="ess-container max-w-4xl">
        <div className="hero-panel px-6 py-10 text-center md:px-10">
          <span className="section-kicker mx-auto">Apply online</span>

          <h1 className="mt-4 text-3xl font-black md:text-4xl">
            Internship Application
          </h1>

          <p className="section-copy mx-auto mt-3 text-primary-foreground/88">
            Complete the form below to apply for an ESS internship.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="feature-card mt-8 grid gap-5 p-6 md:p-8"
        >
          <h2 className="text-lg font-semibold text-primary">
            Personal Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              error={errors.firstName}
            />

            <Field
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              error={errors.lastName}
            />

            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              error={errors.email}
            />

            <Field
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={onChange}
              error={errors.phone}
              placeholder="+251..."
            />
          </div>

          <h2 className="mt-2 text-lg font-semibold text-primary">
            Academic Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="University"
              name="university"
              value={form.university}
              onChange={onChange}
              error={errors.university}
            />

            <Field
              label="Field of Study"
              name="fieldOfStudy"
              value={form.fieldOfStudy}
              onChange={onChange}
              error={errors.fieldOfStudy}
            />

            <Select
              label="Academic Year"
              name="academicYear"
              value={form.academicYear}
              onChange={onChange}
              error={errors.academicYear}
              options={ACADEMIC_YEARS}
            />

            <Select
              label="Preferred Department"
              name="department"
              value={form.department}
              onChange={onChange}
              error={errors.department}
              options={DEPARTMENTS}
            />

            <Field
              label="Preferred Start Date"
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={onChange}
              error={errors.startDate}
            />
          </div>

          <h2 className="mt-2 text-lg font-semibold text-primary">
            Cover Letter
          </h2>

          <div>
            <label className="text-sm font-medium">
              Upload Cover Letter
            </label>

            <input
              type="file"
              name="coverLetter"
              onChange={onChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="input-field mt-1.5"
            />

            <p className="mt-1 text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG
            </p>

            {/* Added Preview Feature Container */}
            {previewUrl && (
              <div className="mt-3 max-w-xs overflow-hidden rounded-md border border-white/10 bg-white/5 p-2">
                <img 
                  src={previewUrl} 
                  alt="Cover Letter Preview" 
                  className="h-auto w-full rounded object-contain max-h-60"
                />
              </div>
            )}

            {form.coverLetter && (
              <p className="mt-2 text-sm text-success">
                Selected File: {form.coverLetter.name}
              </p>
            )}

            {errors.coverLetter && (
              <p className="mt-1 text-xs text-destructive">
                {errors.coverLetter}
              </p>
            )}
          </div>

          <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to ESS internship guidelines.
            </p>

            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field mt-1.5"
      />

      {error && (
        <p className="mt-1 text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  error,
  options,
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="input-field mt-1.5"
      >
        <option value="">Select...</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

export default Apply;