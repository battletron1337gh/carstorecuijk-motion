import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Occasions Cuijk | 1ste Eigenaar Auto\'s & Tweedehands',
  description: 'Ruim aanbod occasions in Cuijk met voornamelijk 1ste eigenaar autos. Tweedehands auto\'s van alle merken met garantie. BOVAG erkend. 168 reviews, 5 sterren.',
  keywords: 'occasions Cuijk, 1ste eigenaar autos, 1e eigenaar, eerste eigenaar, tweedehands auto\'s, gebruikte auto\'s, alle merken, auto kopen, betrouwbare occasions, BOVAG occasions',
  openGraph: {
    title: 'Occasions Cuijk | Tweedehands & Gebruikte Auto\'s',
    description: 'Ruim aanbod tweedehands en gebruikte auto\'s. Alle merken, garantie. 168 reviews, 5 sterren.',
    type: 'website',
  },
};

export default function OccasionsPage() {
  return (
    <>
      {/* jQuery MOET eerst - VWE vereist dit */}
      <Script
        src="//code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      
      {/* VWE Voorraadlijst Script */}
      <Script
        src="//svl.autodealers.nl/jsVoorraadPlugin.ashx?did=27445&wid=96245"
        strategy="afterInteractive"
      />
      
      <Header />
      <main className="min-h-screen pt-24 lg:pt-28 bg-[#0a0a0a]">
        {/* Page Header */}
        <div className="bg-[#0d0d0d] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Onze Occasions</h1>
            <p className="text-white/50 mt-4 text-lg max-w-2xl">
              Bekijk ons actuele aanbod occasions. Alle auto\'s worden geleverd met garantie en zijn uitgebreid gecontroleerd.
            </p>
          </div>
        </div>

        {/* VWE Voorraadlijst Container - Let op: VWE injecteert in body, niet in specifieke div */}
        <div className="w-full bg-white min-h-[800px]">
          {/* VWE zal hier content injecteren via jQuery */}
          <div id="vwe-voorraad-placeholder" className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4 animate-pulse">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Voorraad wordt geladen</h2>
            <p className="text-gray-500">Even geduld terwijl we de occasions ophalen...</p>
          </div>
        </div>

        {/* SEO Content */}
        <section className="bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Tweedehands auto&apos;s kopen in Cuijk - Voornamelijk 1ste eigenaar</h2>
                <p className="text-white/60 mb-4">
                  Bij Car Store Cuijk vindt u een ruim aanbod betrouwbare tweedehands auto&apos;s en gebruikte auto&apos;s. 
                  Wij specialiseren ons in 1ste eigenaar autos - auto&apos;s die nieuw zijn gekocht door één eigenaar. 
                  Van compacte stadsauto&apos;s tot ruime gezinsauto&apos;s en luxe modellen van alle merken. 
                  Al onze 1e eigenaar autos worden grondig gecontroleerd voordat ze in de verkoop gaan.
                </p>
                <p className="text-white/60">
                  Wij zijn BOVAG erkend met 168 reviews en 5 sterren op Google reviews. Dat betekent garantie op uw aankoop 
                  en vertrouwde service. Daarnaast bieden wij mogelijkheden voor financiering en verzekering.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Auto inkoop - Wij kopen voornamelijk 1ste eigenaar autos</h2>
                <p className="text-white/60 mb-4">
                  Wilt u uw huidige auto verkopen of inruilen? Wij bieden een eerlijke prijs voor uw auto, 
                  met name voor 1ste eigenaar autos. Auto inkoop van alle merken - van Volkswagen en BMW tot Audi en Mercedes.
                  Heeft u een eerste eigenaar auto? Neem contact met ons op voor een vrijblijvende taxatie.
                </p>
                <p className="text-white/60">
                  Ook voor auto inkoop bent u bij ons aan het juiste adres. Wij kopen voornamelijk 1e eigenaar autos in 
                  van particulieren en bedrijven in heel Nederland. Direct geld en snelle afhandeling.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
