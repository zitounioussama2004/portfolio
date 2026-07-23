import type { ReactNode } from "react";

import Navbar from "../Navbar";
import Footer from "../../sections/Footer";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Navbar />

            <main className="pt-20">
                {children}
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;