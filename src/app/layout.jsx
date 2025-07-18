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
import Providers from './Providers';

export const metadata = {
  title: 'Sight Cares India Foundation',
  description: 'Sight Cares India Foundation is a non-profit organization committed to transforming lives by restoring vision',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
