import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { SearchModal } from '../components/SearchModal';
import { AuthModal } from '../components/AuthModal';

function MainContent({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  
  return (
    <main className={isHome ? '' : 'pt-[150px]'}>
      {children}
    </main>
  );
}

export function ShopLayout() {
  return (
    <>
      <Header />
      <CartDrawer />
      <SearchModal />
      <AuthModal />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
