import Navbar from "@/components/Navbar";

const Tourism = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Tourism</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Hotels & Accommodations</h2>
            <p className="text-muted-foreground">Find the perfect place to stay during your visit.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Restaurants</h2>
            <p className="text-muted-foreground">Discover local cuisine and dining experiences.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Attractions</h2>
            <p className="text-muted-foreground">Explore popular tourist destinations and landmarks.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tourism;