// app/layout.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/scss/modal-video.scss";
import "@/styles/animate.css";
import "@/styles/flaticon_aidus.css";
import "@/styles/font-awesome.min.css";
import "@/styles/themify-icons.css";
import "@/styles/sass/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script';
import Providers from './Providers';

export const metadata = {
  title: 'Sight Cares India Foundation | Restoring Sight with Free Eye Care Support',
  description: 'Sight Cares India Foundation - restoring vision for underserved communities in India. Get free eye screenings & support today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PRHK54GX');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F38D31KELJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F38D31KELJ');
          `}
        </Script>
        */}


      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRHK54GX"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Providers>{children}</Providers>
        {/* Load Bootstrap JS from CDN */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
