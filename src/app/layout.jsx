import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  // title: "بلاگ اپ",
  title: {
    template: "%s | بلااگ اپ",
    default: "بلاگ اپ", // a default is required when creating a template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl"> {children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
