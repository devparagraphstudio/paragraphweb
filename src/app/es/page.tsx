import { MiddleSection, TopSection } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <main className="flex flex-col">
        <TopSection />
        <MiddleSection />
      </main>
    </div>
  );
}
