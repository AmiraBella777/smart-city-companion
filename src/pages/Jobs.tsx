import Navbar from "@/components/Navbar";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Job Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
            <p className="text-muted-foreground">Browse current job openings across various industries.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Career Resources</h2>
            <p className="text-muted-foreground">Access career development tools and guidance.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Company Directory</h2>
            <p className="text-muted-foreground">Explore potential employers in the city.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;