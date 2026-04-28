import Card from "@/components/Card";

export default function Page() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        <Card
          title="Package 1"
          price="$100"
          duration="30–45 mins"
          photos="30+ edited photos"
          delivery="1-2 weeks"
        />

        <Card
          title="Package 2"
          price="$150"
          duration="45–60 mins"
          photos="50+ edited photos"
          delivery="1-2 weeks"
        />

        <Card
          title="Package 3"
          price="$200"
          duration="75–90 mins"
          photos="75+ edited photos"
          delivery="2-3 weeks"
        />

        <Card
          title="Package 4"
          price="$250"
          duration="90–120 mins"
          photos="100+ edited photos"
          delivery="2-4 weeks"
        />

      </div>
    </main>
  );
}