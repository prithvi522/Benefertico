import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { products } from '../data/products.js'

function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <section className="mx-auto w-full max-w-[900px] px-4 py-28 text-center sm:px-6 sm:py-32">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">Product not found</p>
        <h1 className="mb-6 text-4xl font-bold leading-none text-[#15251c] sm:text-5xl md:text-7xl">This product detail page does not exist.</h1>
        <Link className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#123f2a] px-6 py-4 font-bold text-white sm:w-auto" to="/products">
          <ArrowLeft size={18} /> Back to products
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <Link className="mb-8 inline-flex items-center gap-2 font-bold text-[#123f2a]" to="/products">
        <ArrowLeft size={18} /> Back to products
      </Link>

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[24px] border border-[#1f6f4324] bg-[#f3f7ee] p-4 shadow-[0_24px_70px_rgba(22,48,35,0.12)] sm:rounded-[32px] sm:p-6">
          <img className="h-[280px] w-full object-contain sm:h-[360px] md:h-[420px]" src={product.image} alt={product.name} />
        </div>

        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">{product.category}</p>
          <h1 className="mb-5 break-words text-4xl font-bold leading-none text-[#15251c] sm:text-5xl md:text-7xl">{product.name}</h1>
          <p className="text-base leading-8 text-[#65736b] md:text-lg">{product.description}</p>
          <Link className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#123f2a] px-6 py-4 font-bold text-white shadow-[0_12px_28px_rgba(18,63,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b3320] sm:w-auto" to="/contact">
            Enquire now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-[#1f6f4324] bg-white/85 p-5 shadow-[0_24px_70px_rgba(22,48,35,0.12)] sm:p-8">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">Overview</p>
          <h2 className="mb-4 text-3xl font-bold text-[#15251c]">Product summary</h2>
          <p className="leading-8 text-[#65736b]">{product.note || product.benefit || product.description}</p>
        </article>

        <article className="rounded-3xl border border-[#1f6f4324] bg-white/85 p-5 shadow-[0_24px_70px_rgba(22,48,35,0.12)] sm:p-8">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">Key benefits</p>
          <h2 className="mb-5 text-3xl font-bold text-[#15251c]">Why growers choose it</h2>
          <div className="grid gap-4">
            {product.benefits.map((benefit) => (
              <p className="flex items-start gap-3 rounded-2xl bg-[#f8faf6] p-4 leading-7 text-[#65736b]" key={benefit}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#1f6f43]" size={18} />
                {benefit}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProductDetailPage
