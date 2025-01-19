// app/page.tsx
import Header from '@/components/Header';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full px-4">
        <Header/>
        <About />
      </div>
    </main>
  );
}