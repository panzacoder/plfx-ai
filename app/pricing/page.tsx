import Script from 'next/script'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export default function PricingPage() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-1 items-center bg-[#0b0a08]">
      <Script src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id="prctbl_1P9Xm4G6uO43IpirYmkgRbPU"
        publishable-key="pk_live_51P9WlQG6uO43IpirItaYacnBDvLcW9NuxPEPFA51fMTGrHmUKOJkFjYwjuggUFzmrOfdz3F7tgXtHX9SxVq2nULO00Liytc84s"
      ></stripe-pricing-table>
    </div>
  )
}
