import React from 'react'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Thank You for Your Purchase!</h1>
        <p className="mt-3 text-gray-600">Your download is ready. Access your files anytime.</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20">Download Windows Fix Mastery</a>
          <a href="#" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10">Download Bonus Tools</a>
        </div>

        <section className="mt-10 text-left mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold">Next steps</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-gray-700">
            <li>Open the guide and follow the Quick Setup steps.</li>
            <li>Apply the main optimization checklist.</li>
            <li>Use the bonus tools for extra performance.</li>
          </ol>
        </section>

        <section className="mt-10">
          <p className="text-sm text-gray-700">Need help? Contact support anytime.</p>
        </section>
      </main>
    </div>
  )
}
