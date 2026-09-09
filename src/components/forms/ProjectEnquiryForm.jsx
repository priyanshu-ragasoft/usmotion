import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CATEGORIES, INDUSTRIES, BUDGET_RANGES, PROJECT_TIMELINES, STUDIO_CONTACT } from "../../utils/constants";
import { submitProjectEnquiry } from "../../services/api";
import Button from "../common/Button";

const INITIAL = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  projectType: "",
  industry: "",
  budget: "",
  timeline: "",
  description: "",
};

function Field({ id, label, required, error, children }) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold tracking-[0.16em] text-brand-navy/70 uppercase">
        {label}
        {required ? (
          <span className="ml-1 text-brand-red" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 font-medium tracking-normal text-brand-muted normal-case">(optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-brand-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-muted/50 focus:border-brand-red";

function fieldClass(error) {
  return `${inputClass} ${error ? "border-brand-red" : "border-black/10"}`;
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.phone && !/^[\d\s()+.-]{7,}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.industry) errors.industry = "Select an industry.";
  if (!values.budget) errors.budget = "Select a budget range.";
  if (!values.timeline) errors.timeline = "Select a timeline.";
  if (!values.description.trim()) errors.description = "Tell us about the project.";
  else if (values.description.trim().length < 20) errors.description = "Please add a little more detail (20+ characters).";
  return errors;
}

export default function ProjectEnquiryForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      await submitProjectEnquiry(values);
      setStatus("success");
      setValues(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[1.35rem] border border-black/6 bg-white p-8 sm:p-10" role="status">
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Received</p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-brand-navy">Thanks for reaching out.</h2>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-brand-muted">
          Our team will review your project details and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.35rem] border border-black/6 bg-white p-6 sm:p-8 lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(errors.name)}
          />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={onChange}
            className={fieldClass(errors.company)}
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(errors.email)}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={onChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass(errors.phone)}
          />
        </Field>
        <Field id="country" label="Country">
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            value={values.country}
            onChange={onChange}
            className={fieldClass()}
          />
        </Field>
        <Field id="projectType" label="Project type" required error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={onChange}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={fieldClass(errors.projectType)}
          >
            <option value="">Select type</option>
            {CATEGORIES.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Field>
        <Field id="industry" label="Industry" required error={errors.industry}>
          <select
            id="industry"
            name="industry"
            value={values.industry}
            onChange={onChange}
            aria-invalid={Boolean(errors.industry)}
            aria-describedby={errors.industry ? "industry-error" : undefined}
            className={fieldClass(errors.industry)}
          >
            <option value="">Select industry</option>
            {INDUSTRIES.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Field>
        <Field id="budget" label="Budget" required error={errors.budget}>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={onChange}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            className={fieldClass(errors.budget)}
          >
            <option value="">Select budget</option>
            {BUDGET_RANGES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Timeline" required error={errors.timeline}>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={onChange}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            className={fieldClass(errors.timeline)}
          >
            <option value="">Select timeline</option>
            {PROJECT_TIMELINES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="description" label="Project description" required error={errors.description}>
            <textarea
              id="description"
              name="description"
              rows={6}
              value={values.description}
              onChange={onChange}
              aria-invalid={Boolean(errors.description)}
              aria-describedby={errors.description ? "description-error" : undefined}
              className={`${fieldClass(errors.description)} resize-y`}
            />
          </Field>
        </div>
      </div>

      {status === "error" ? (
        <div className="mt-6 rounded-xl border border-brand-red/20 bg-brand-red/5 px-4 py-3 text-sm text-brand-red" role="alert">
          Something went wrong while sending your project.
          <button type="button" onClick={() => setStatus("idle")} className="ml-2 font-semibold underline-offset-4 hover:underline">
            Try again
          </button>
        </div>
      ) : null}

      <Button type="submit" disabled={status === "loading"} className="mt-8 min-h-12 px-8">
        {status === "loading" ? "Sending…" : "Start a Project"}
      </Button>
    </form>
  );
}

export function ContactAside() {
  const items = [
    { icon: Mail, label: STUDIO_CONTACT.email, href: STUDIO_CONTACT.emailHref, note: "Drop us an email" },
    { icon: Phone, label: STUDIO_CONTACT.phone, href: STUDIO_CONTACT.phoneHref, note: "Talk to the studio" },
    { icon: MapPin, label: "Los Angeles · Worldwide", href: "https://maps.google.com", note: "Production across cities" },
  ];

  return (
    <aside>
      <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Contact</p>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-4xl">
        Tell us the film you want to make
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
        Share the brief, the timeline, and the ambition. The studio will review and come back with next steps.
      </p>

      <ul className="mt-10 space-y-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <a href={item.href} className="group flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-navy">{item.label}</span>
                  <span className="mt-0.5 block text-xs text-brand-muted">{item.note}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
