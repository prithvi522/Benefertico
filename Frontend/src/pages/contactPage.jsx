import { useState } from 'react'
import {
  ArrowRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Loader2,
  User,
  Sparkles,
  Layers
} from 'lucide-react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  e.stopPropagation()

  if (isSubmitting) return

  setIsSubmitting(true)

  const form = e.currentTarget
  const formData = new FormData(form)

  formData.append("access_key", "08bad501-ecc4-4151-95dc-2a0e3f257695")
  formData.append("subject", "New Inquiry from Benefertico Nutrition Website")

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      form.reset()
      alert("Inquiry sent successfully!")
    } else {
      alert(
        "Error sending inquiry: " +
        (data.message || "Please check your details.")
      )
    }
  } catch (error) {
    console.error("Form submission error:", error)
    alert("Something went wrong. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}

  const inputClasses = 
    "w-full rounded-2xl border border-emerald-950/10 bg-emerald-50/20 px-4 py-3.5 text-emerald-950 transition-all duration-200 placeholder:text-emerald-900/40 hover:border-emerald-800/25 focus:border-[#123f2a] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#123f2a]/10"

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-72 w-full max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-100/60 via-emerald-50/40 to-transparent blur-3xl" />

      <div className="grid items-stretch gap-8 lg:grid-cols-12">
        {/* Left Information Card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#123f2a] p-8 text-white shadow-2xl shadow-emerald-950/20 sm:p-12 lg:col-span-5">
          {/* Subtle Inner Pattern / Gradient */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-emerald-600/10 blur-2xl" />

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm">
              <Sparkles size={12} className="text-emerald-300" />
              Contact
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:leading-[1.15]">
              Start a crop nutrition inquiry.
            </h1>
          </div>

          <div className="mt-12 space-y-4">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-start gap-3.5 rounded-2xl border border-white/5 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300 transition-colors group-hover:bg-white/20">
                <MapPin size={17} />
              </div>
              <span className="text-sm leading-relaxed text-white/80 transition-colors group-hover:text-white">
                Leemansstraat 2, 4251 LD - Werkendam, the Netherlands
              </span>
            </a>

            <a 
              href="mailto:benefertico@gmail.com" 
              className="group flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300 transition-colors group-hover:bg-white/20">
                <Mail size={17} />
              </div>
              <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                benefertico@gmail.com
              </span>
            </a>

            <a 
              href="tel:+31183505268" 
              className="group flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300 transition-colors group-hover:bg-white/20">
                <Phone size={17} />
              </div>
              <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                +31183505268
              </span>
            </a>

            <div className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/5 p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <Globe2 size={17} />
              </div>
              <span className="text-sm font-medium text-white/80">
                Benefertico Nutrition
              </span>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="rounded-[2.5rem] border border-emerald-950/10 bg-white/80 p-8 shadow-xl shadow-emerald-950/5 backdrop-blur-md sm:p-12 lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Inquiry form">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#123f2a]" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <input 
                  id="name"
                  className={inputClasses}
                  type="text" 
                  name="name" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#123f2a]" htmlFor="email">
                Email
              </label>
              <input 
                id="email"
                className={inputClasses}
                type="email" 
                name="email" 
                placeholder="Enter your email address"
                required 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#123f2a]" htmlFor="interest">
                Interest
              </label>
              <div className="relative">
                <select 
                  id="interest"
                  className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                  name="interest" 
                  defaultValue="product"
                >
                  <option value="product">Product inquiry</option>
                  <option value="dealer">Dealer partnership</option>
                  <option value="research">Research collaboration</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-emerald-900/50">
                  <Layers size={16} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#123f2a]" htmlFor="message">
                Message
              </label>
              <textarea 
                id="message"
                className={`${inputClasses} min-h-[130px] resize-y`}
                name="message" 
                rows={4}
                placeholder="Tell us about your requirements or crop nutrition goals..."
                required 
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#123f2a] px-8 py-4 font-semibold text-white shadow-lg shadow-[#123f2a]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0b3320] hover:shadow-xl hover:shadow-[#123f2a]/30 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span>Sending inquiry</span>
                  <Loader2 className="animate-spin" size={18} />
                </>
              ) : (
                <>
                  <span>Send inquiry</span>
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}