import GoogleAnalytics from "@/app/components/GoogleAnalytics/GoogleAnalytics";
import Header from "@/app/components/Header/Header";
import { Metadata } from "next";
import Image from "next/image";
import edsvectorleft from "../../../../public/edsvectorleft.png";
import shirtgradienteffect from "../../../../public/shirtgradienteffect.png";
import gradienteffectleft from "../../../../public/gradienteffectleft.png";
import edsvectorright from "../../../../public/edsvectorright.png";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Última fase",
  description:
    "Última fase votação Esportes da Sorte Na Varzea, Esportes da Sorte, EDS, Super Copa Zona Leste",
};

interface LayoutProps {
  children: React.ReactNode;
}

const METRICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function LayoutLastPhase({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
        <body className="overflow-x-hidden">
          {METRICS_ID && <GoogleAnalytics gaId={METRICS_ID} />}
        </body>
      </html>
      {children}
    </>
  );
}
