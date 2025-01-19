// app/page.tsx
import Header from '@/components/Header';
import About from '@/components/About';
import CursorDot from '@/components/Cursor';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full px-4">
        <CursorDot />
        <Header/>
        <About />
      </div>
    </main>
  );
}