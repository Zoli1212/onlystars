import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

import TanStackProvider from "@/providers/TanStackProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "OnlyStars - E-commerce Store",
	description:
		"OnlyStars is a platform forlovers which includes a wide range of exclusive content and merchandise.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<div className='h-screen flex flex-col'>
						<div className='flex-1'>
							<TanStackProvider>{children}</TanStackProvider>
						</div>
						<Footer />
					</div>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
