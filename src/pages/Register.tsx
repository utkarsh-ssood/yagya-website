import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import "../styles/global.css";
import "../styles/register.css";

const daysList = [
  "19 Feb 2026 (Thursday)",
  "20 Feb 2026 (Friday)",
  "21 Feb 2026 (Saturday)",
  "22 Feb 2026 (Sunday)",
  "23 Feb 2026 (Monday)",
  "24 Feb 2026 (Tuesday)",
  "25 Feb 2026 (Wednesday)",
];

const registerSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  gender: z.string().min(1, "Please select gender"),

  phone: z.string().regex(/^\d{10}$/, "Primary Phone must be 10 digits"),

  altPhone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10}$/.test(val), {
      message: "Alternate Phone must be 10 digits",
    }),

  email: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().email({ message: "Invalid email" }).optional()
  ),

  persons: z
    .string()
    .regex(/^[1-9]\d*$/, "Number of persons is required"),
  address: z.string().min(1, "Address is required"),
  days: z.array(z.string()).min(1, "Please select at least one day"),
  accommodation: z.string().min(1, "Select accommodation"),
  remarks: z.string().optional(),
});

type RegisterForm = z.infer<typeof registerSchema>;

const Register = () => {
  const [loading, setLoading] = useState(false);

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState("");

  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [accommodation, setAccommodation] = useState("");

  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterForm, string>>
  >({});

  const genderRef = useRef<HTMLDivElement>(null);
  const accommodationRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        genderRef.current &&
        !genderRef.current.contains(event.target as Node)
      ) {
        setGenderOpen(false);
      }

      if (
        accommodationRef.current &&
        !accommodationRef.current.contains(event.target as Node)
      ) {
        setAccommodationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: RegisterForm = {
      name: formData.get("name")?.toString() || "",
      gender,
      phone: formData.get("phone")?.toString() || "",
      altPhone: formData.get("altPhone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      persons: formData.get("persons")?.toString() || "",
      address: formData.get("address")?.toString() || "",
      days: selectedDays,
      accommodation,
      remarks: formData.get("remarks")?.toString() || "",
    };

    const result = registerSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegisterForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof RegisterForm;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_cmna36u",
        "template_kt7n008",
        {
          ...data,
          days: selectedDays.join(", "),
        },
        "xHoA1HJku-Gsa-55w"
      );

      if (response.status === 200) {
        alert("Registration submitted successfully ✅");
        formRef.current?.reset();
        setSelectedDays([]);
        setAccommodation("");
        setGender("");
      } else {
        alert("Submission failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Register - Shri Sidheshwar Shiv Mandir";
  }, []);

  return (
    <div className="page">
      <h1>Rudra Maha Yagya Registration</h1>

      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        <input name="name" placeholder="Full Name *" />
        {errors.name && <span className="error">{errors.name}</span>}

        {/* GENDER DROPDOWN */}
        <label>Gender *</label>
        {errors.gender && <span className="error">{errors.gender}</span>}
        <div
          className={`custom-dropdown ${genderOpen ? "open" : ""}`}
          ref={genderRef}
          onClick={() => setGenderOpen((prev) => !prev)}
        >
          <span className="selected">{gender || "Select Gender"}</span>
          <span className="arrow">▼</span>
          <div className="options">
            {["Male", "Female", "Other"].map((opt) => (
              <div
                key={opt}
                className="option"
                onClick={(e) => {
                  e.stopPropagation();
                  setGender(opt);
                  setGenderOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>

        <div className="phone-fields">
          <div className="phone-field">
            <input name="phone" placeholder="Primary Phone *" />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="phone-field">
            <input name="altPhone" placeholder="Alternate Phone (Optional)" />
            {errors.altPhone && (
              <span className="error">{errors.altPhone}</span>
            )}
          </div>
        </div>

        <input name="email" placeholder="Email (Optional)" />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          name="persons"
          type="number"
          min="1"
          placeholder="Number of Persons Attending *"
        />
        {errors.persons && <span className="error">{errors.persons}</span>}

        <textarea name="address" placeholder="Address *" />
        {errors.address && <span className="error">{errors.address}</span>}

        <label>Accommodation Required *</label>
        {errors.accommodation && (
          <span className="error">{errors.accommodation}</span>
        )}

        <div
          className={`custom-dropdown ${accommodationOpen ? "open" : ""}`}
          ref={accommodationRef}
          onClick={() => setAccommodationOpen((prev) => !prev)}
        >
          <span className="selected">
            {accommodation || "Select Accommodation"}
          </span>
          <span className="arrow">▼</span>
          <div className="options">
            {["Yes", "No"].map((opt) => (
              <div
                key={opt}
                className="option"
                onClick={(e) => {
                  e.stopPropagation();
                  setAccommodation(opt);
                  setAccommodationOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>

        <label>Days Available *</label>
        {errors.days && <span className="error">{errors.days}</span>}
        <div className="days">
          {daysList.map((day) => (
            <button
              key={day}
              type="button"
              className={selectedDays.includes(day) ? "active" : ""}
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <textarea name="remarks" placeholder="Additional Remarks (Optional)" />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
};

export default Register;
