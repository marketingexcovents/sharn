"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ChevronDown, ArrowRight, Lock, MessageCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .regex(/^[A-Za-z ]+$/, "Only letters and spaces allowed"),

  whatsapp: z
    .string()
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits")
    .regex(/^[6-9]\d{9}$/, "Enter a valid WhatsApp number."),

  email: z.string().email("Enter a valid email address."),

  country: z
    .string()
    .min(1, "Please select your country."),

  treatment: z
    .string()
    .min(1, "Please select a treatment."),

  message: z
    .string()
    .trim()
    .min(20, "Please enter at least 20 characters.")
    .max(500, "Maximum 500 characters allowed."),
});
const treatments = [
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Oncology",
  "IVF",
  "Kidney Care",
  "Spine Surgery",
  "Plastic Surgery",
];

export default function FreeOpinionForm() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        const result = await response.json();
        setCountries(result.data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsapp: "",
      email: "",
      country: "",
      treatment: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const url = "https://script.google.com/macros/s/AKfycbxceqh0reuewDGW2Yd6BwJTPr6_a-eIX7Xq4_JqtkpUWem5rDJnsETM1Dtxwdh1oE5o5A/exec";

    try {
      console.log(data);

      // Call your API here

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Form submitted successfully!");
        reset();
        // setShowForm(false);     // ✅ HIDE FORM
        // setShowDownload(true); // ✅ SHOW DOWNLOAD
      } else {
        toast.error("Please try again later.");
      }
    } catch (error) {
      toast.error("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-10/12 mx-auto rounded-4xl border border-white/10 bg-[#2B5783] p-4 md:p-8">
      <h2 className="text-white text-2xl font-bold">
        Get a Free Opinion
      </h2>

      <p className="mt-2 text-[0.9rem] text-gray-200 leading-9">
        Share your reports. Top Indian doctors respond within 24 hours —
        free & confidential.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <input
              {...register("fullName")}
              placeholder="Full Name *"
              name="fullName"
              className="w-full h-12  rounded-2xl bg-[#426C95] border border-white/10 px-7 text-white outline-none placeholder:text-gray-300"
            />
            <p className="text-red-300 mt-1 text-sm">
              {errors.fullName?.message}
            </p>
          </div>

          <div>
            <input
              {...register("whatsapp")}
              placeholder="WhatsApp Number *"
              name="whatsapp"
              className="w-full h-12  rounded-2xl bg-[#426C95] border border-white/10 px-7 text-white outline-none placeholder:text-gray-300"
            />
            <p className="text-red-300 mt-1 text-sm">
              {errors.whatsapp?.message}
            </p>
          </div>

          <div>
            <input
              {...register("email")}
              placeholder="Email Address *"
              name="email"
              className="w-full h-12  rounded-2xl bg-[#426C95] border border-white/10 px-7 text-white outline-none placeholder:text-gray-300"
            />
            <p className="text-red-300 mt-1 text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div className="relative">
            <select
              {...register("country")}
              name="country"
              className="appearance-none w-full h-12  rounded-2xl bg-[#426C95] border border-white/10 px-7 text-white outline-none"
            >

              <option value="" >Select the country</option>
              {countries.length > 0 ? (
                countries.map((item) => (
                  <option key={item.iso2} value={item.country}>
                    {item.country}
                  </option>
                ))
              ) : (
                <option disabled>Loading countries...</option>
              )}
            </select>

            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white pointer-events-none" />

            <p className="text-red-300 mt-1 text-sm">
              {errors.country?.message}
            </p>
          </div>
        </div>



        <div className="relative">
          <select
            {...register("treatment")}
            name="treatment"
            className="appearance-none w-full h-12  rounded-2xl bg-[#426C95] border border-white/10 px-7 text-white outline-none"
          >
            <option value="">Select Treatment</option>

            {treatments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white pointer-events-none" />

          <p className="text-red-300 mt-1 text-sm">
            {errors.treatment?.message}
          </p>
        </div>

        <div>
          <textarea
            {...register("message")}
            name="message"
            rows={1}
            placeholder="Describe your condition or query..."
            className="w-full rounded-2xl bg-[#426C95] border border-white/10 p-7 text-white outline-none placeholder:text-gray-300 resize-none"
          />

          <p className="text-red-300 mt-1 text-sm">
            {errors.message?.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12  rounded-full bg-[#19AAA5] text-white text-[1.5rem] font-semibold flex justify-center items-center gap-2 hover:opacity-90 disabled:opacity-50"
        >
          {loading ? (
            "Submitting..."
          ) : (
            <>
              Submit for Free Opinion
              <ArrowRight size={24} />
            </>
          )}
        </button>

        <button
          type="button"
          className="w-full h-12  rounded-full border border-green-500 bg-[#2E6D72] text-[#4CE16E] text-xl font-semibold flex justify-center items-center gap-2"
        >
          <MessageCircle size={24} />
          Or message us on WhatsApp
        </button>

        <div className="flex justify-center items-center gap-2 text-gray-300">
          <Lock size={16} />
          <span>100% Confidential · Free · No Obligation</span>
        </div>
      </form>
    </div>
  );
}