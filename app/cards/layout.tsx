import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Cards Layout by Mimach",
  description: "Some cards layout by Mimach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
     <main
     className=""
     >{children}</main>
     
  );
}
