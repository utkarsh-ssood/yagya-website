import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import "../styles/global.css";
import "../styles/register.css";

/* -------------------- CONSTANTS -------------------- */

const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbyZVhEjo3Fi9LwcfiqCjx2dLFMAvtrQbhZqxZZ9x0fOpcp7TMk1yhbxEdBNpKh6c-WBNA/exec";

const daysList = [
  "21 Feb 2026 (Saturday)",  
  "22 Feb 2026 (Sunday)",
  "23 Feb 2026 (Monday)",
  "24 Feb 2026 (Tuesday)",
  "25 Feb 2026 (Wednesday)",
];

/* -------------------- VALIDATION -------------------- */

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
  persons: z.string().regex(/^[1-9]\d*$/, "Number of persons is required"),
  address: z.string().min(1, "Address is required"),
  days: z.array(z.string()).min(1, "Please select at least one day"),
  accommodation: z.string().min(1, "Select accommodation"),
  remarks: z.string().optional(),
});

type RegisterForm = z.infer<typeof registerSchema>;

/* -------------------- COMPONENT -------------------- */

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

  /* -------------------- EFFECTS -------------------- */

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (genderRef.current && !genderRef.current.contains(e.target as Node)) {
        setGenderOpen(false);
      }
      if (
        accommodationRef.current &&
        !accommodationRef.current.contains(e.target as Node)
      ) {
        setAccommodationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.title = "Register - Shri Sidheshwar Shiv Mandir";
  }, []);

  /* -------------------- HELPERS -------------------- */

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const submitToSheet = async (data: RegisterForm) => {
    await fetch(SHEET_API_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script compatibility
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        days: data.days.join(", "),
      }),
    });
  };

  /* -------------------- SUBMIT -------------------- */

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
        fieldErrors[issue.path[0] as keyof RegisterForm] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      /* 1️⃣ SAVE TO GOOGLE SHEETS (CRITICAL) */
      await submitToSheet(data);

      /* 2️⃣ EMAIL (NON-CRITICAL) */
      try {
        await emailjs.send(
          "service_cmna36u",
          "template_kt7n008",
          {
            ...data,
            days: selectedDays.join(", "),
          },
          "xHoA1HJku-Gsa-55w"
        );
      } catch (emailErr) {
        // 🧾 Silent fallback logging
        console.warn("EmailJS failed, quota likely exceeded:", emailErr);
        console.log({
          type: "EMAIL_FAILED",
          timestamp: new Date().toISOString(),
          payload: data,
        });
      }

      alert("Registration submitted successfully ✅");

      formRef.current?.reset();
      setSelectedDays([]);
      setGender("");
      setAccommodation("");

    } catch (sheetErr) {
      console.error("Google Sheet submission failed:", sheetErr);
      alert("Submission failed ❌ Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* -------------------- JSX -------------------- */

  return (
   <></> 
  )
};

export default Register;
