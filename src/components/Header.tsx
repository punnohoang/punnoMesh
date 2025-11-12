"use client";

import Link from 'next/link';

export function Header() {
  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #ddd',
      padding: '20px'
    }}>
      <nav style={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center'
      }}>
        <Link 
          href="/" 
          style={{
            textDecoration: 'none',
            color: 'black',
            fontSize: '18px'
          }}
        >
          Home
        </Link>
        
        <Link 
          href="/Mint" 
          style={{
            textDecoration: 'none',
            color: 'black',
            fontSize: '18px'
          }}
        >
          Mint
        </Link>
        
        <Link 
          href="/Burn" 
          style={{
            textDecoration: 'none',
            color: 'black',
            fontSize: '18px'
          }}
        >
          Burn
        </Link>
      </nav>
    </header>
  );
}