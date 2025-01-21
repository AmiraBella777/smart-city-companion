import Navbar from "@/components/Navbar";

const Student = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Student Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Educational Institutions</h2>
            <p className="text-muted-foreground">Find universities, colleges, and schools in the city.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Libraries</h2>
            <p className="text-muted-foreground">Access public and academic libraries.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Study Centers</h2>
            <p className="text-muted-foreground">Discover coaching centers and study resources.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Student;