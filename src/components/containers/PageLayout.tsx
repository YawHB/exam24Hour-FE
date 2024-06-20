import { ReactNode } from 'react';

interface pageLayoutProps {
    children: ReactNode;
}
export default function PageLayout({ children }: pageLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow mx-auto px-4 sm:px-6"> {children} </main>
        </div>
    );
}
