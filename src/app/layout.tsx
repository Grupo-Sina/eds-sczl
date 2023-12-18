"use client"

import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Head from "next/head";
import React, { ReactNode } from "react";
import { AppContextProvider } from "./context/AppContext";

// export const metadata: Metadata = {
//   title: "EDS - Super Copa Zona Leste",
//   description: "Esportes da Sorte, EDS, Super Copa Zona Leste",
// };

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <Head>
        <title>EDS - Super Copa Zona Leste</title>
        <meta name="description" content={"Esportes da Sorte, EDS, Super Copa Zona Leste" || ""} />
      </Head>
      <body className="overflow-x-hidden">
        <AppContextProvider>
          <Providers>{children}</Providers>
        </AppContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
