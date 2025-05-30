'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import { useUser } from '../hooks/useUser';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const showNavigation = !!user;

  return (
    <>
      {showNavigation && <Navigation />}
      <main className={`${showNavigation ? 'md:ml-64' : ''} min-h-screen bg-gray-50`}>
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </>
  );
} 