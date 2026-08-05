import { Header } from "@/components/layout";
import { Boost, Hero, Shorten, Stats } from "@/views/home";

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-x-clip">
      <Header />

      <main className="flex-1">
        <Hero />
        <Shorten />
        <Stats />
        <Boost />
      </main>
    </div>
  );
}
