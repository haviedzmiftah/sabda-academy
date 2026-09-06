"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";

const trialSchema = z.object({
  parentName: z.string().trim().min(2, "Nama orang tua minimal 2 karakter."),
  childName: z.string().trim().min(2, "Nama anak minimal 2 karakter."),
  childAge: z.coerce.number().int("Usia harus berupa angka bulat.").min(5, "Usia minimal 5 tahun.").max(17, "Usia maksimal 17 tahun."),
  program: z.string().min(1, "Pilih program yang diminati."),
  whatsapp: z.string().trim().regex(/^(?:\+62|62|0)8[1-9][0-9]{7,11}$/, "Masukkan nomor WhatsApp yang valid."),
  consent: z.boolean().refine((value) => value, "Persetujuan diperlukan untuk melanjutkan."),
});

type TrialFormInput = z.input<typeof trialSchema>;
type TrialFormValues = z.infer<typeof trialSchema>;

const programs = ["Belum yakin", "Scratch Coding", "Game Development", "Web Development"];

export function TrialForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<TrialFormInput, undefined, TrialFormValues>({ resolver: zodResolver(trialSchema) });
  const recipient = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  const onSubmit = (values: TrialFormValues) => {
    const message = [
      "Halo Sabda Academy, saya ingin mendaftarkan trial class.",
      "",
      `Nama orang tua: ${values.parentName}`,
      `Nama anak: ${values.childName}`,
      `Usia anak: ${values.childAge} tahun`,
      `Program diminati: ${values.program}`,
      `Nomor WhatsApp: ${values.whatsapp}`,
    ].join("\n");

    trackEvent("trial_form_submit", { program: values.program, child_age: values.childAge });
    if (recipient) {
      window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="font-display text-xl font-bold text-emerald-900">Data siap dikirim.</h2>
        <p className="mt-2 leading-7 text-emerald-800">
          WhatsApp akan terbuka untuk melanjutkan pendaftaran dengan tim Sabda Academy.
        </p>
        <button type="button" onClick={() => reset()} className="focus-ring mt-5 font-bold text-emerald-900 underline underline-offset-4">
          Isi form lagi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <FormField label="Nama orang tua" error={errors.parentName?.message}>
        <input {...register("parentName")} autoComplete="name" className="form-input" />
      </FormField>
      <FormField label="Nama anak" error={errors.childName?.message}>
        <input {...register("childName")} autoComplete="off" className="form-input" />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Usia anak" error={errors.childAge?.message}>
          <input {...register("childAge")} type="number" min="5" max="17" className="form-input" />
        </FormField>
        <FormField label="Program diminati" error={errors.program?.message}>
          <select {...register("program")} className="form-input">
            <option value="">Pilih program</option>
            {programs.map((program) => <option key={program}>{program}</option>)}
          </select>
        </FormField>
      </div>
      <FormField label="Nomor WhatsApp" hint="Contoh: 081234567890" error={errors.whatsapp?.message}>
        <input {...register("whatsapp")} type="tel" autoComplete="tel" placeholder="081234567890" className="form-input" />
      </FormField>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input {...register("consent")} type="checkbox" className="mt-1 h-4 w-4 accent-blue-700" />
        <span>Saya menyetujui Sabda Academy menghubungi saya terkait trial class.</span>
      </label>
      {errors.consent ? <p className="text-sm text-red-700">{errors.consent.message}</p> : null}
      <button type="submit" disabled={isSubmitting} className="focus-ring min-h-12 w-full rounded-full bg-ink px-6 py-3 font-bold text-white transition-colors hover:bg-blue-900 disabled:cursor-wait disabled:opacity-60">
        {isSubmitting ? "Menyiapkan..." : "Lanjut ke WhatsApp"}
      </button>
      {!recipient ? <p className="text-sm text-amber-700">WhatsApp belum dikonfigurasi. Tim perlu mengatur `NEXT_PUBLIC_WHATSAPP_NUMBER`.</p> : null}
    </form>
  );
}

function FormField({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-ink">{label}</label>
      {children}
      {hint && !error ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
      {error ? <p role="alert" className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
