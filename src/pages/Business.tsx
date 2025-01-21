import Navbar from "@/components/Navbar";

const Business = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Business Hub</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Business Centers</h2>
            <p className="text-muted-foreground">Find commercial spaces and business facilities.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Industry News</h2>
            <p className="text-muted-foreground">Stay updated with local business developments.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Networking Events</h2>
            <p className="text-muted-foreground">Discover business networking opportunities.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Business;