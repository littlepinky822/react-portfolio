// app/page.tsx
import Header from '@/components/Header';
import About from '@/components/About';
import CursorDot from '@/components/Cursor';
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full px-4">
        <CursorDot />
        <Header/>
        <About />
        <Projects />
      </div>
    </main>
  );
}