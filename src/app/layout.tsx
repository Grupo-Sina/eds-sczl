"use client";

import { Providers } from "./providers";
import "./globals.css";
import Head from "next/head";
import React, { ReactNode } from "react";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";

import { usePathname } from "next/navigation";
import { APP_PUBLIC_ROUTES } from "./routes/public-routes";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
const PrivateRoute = dynamic(() => import("./routes/private-router"), {
  ssr: false,
});
interface RootLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  title = "EDS - Super Copa Zona Leste",
  description = "Esportes da Sorte, EDS, Super Copa Zona Leste",
}) => {
  const pathname = usePathname();

  return (
    <html lang="pt-br">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
      </Head>
      <body className="overflow-x-hidden">
        <AppContextProvider>
          <AuthContextProvider>
            <Providers>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                transition={Slide}
                theme={"colored"}
              />
              {pathname && (
                <>
                  {APP_PUBLIC_ROUTES.includes(pathname) ? (
                    <>{children}</>
                  ) : (
                    <PrivateRoute>{children}</PrivateRoute>
                  )}
                </>
              )}
            </Providers>
          </AuthContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
