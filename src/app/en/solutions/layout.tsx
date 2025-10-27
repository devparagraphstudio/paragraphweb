import { Navbar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full pl-9">
            <Navbar />
            {children}
        </div>
    );
}