import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-y-2 p-5">
        <h1 className="text-center font-bold text-4xl">
          Welcome to the Home Page
        </h1>
        <Button>Click me</Button>
      </section>
    </main>
  );
}

export default HomePage;
