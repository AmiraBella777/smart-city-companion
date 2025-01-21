import Navbar from "@/components/Navbar";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Administration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p className="text-muted-foreground">Manage user profiles and permissions.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">Content Management</h2>
            <p className="text-muted-foreground">Update and maintain site content.</p>
          </div>
          <div className="module-card">
            <h2 className="text-xl font-semibold mb-4">System Settings</h2>
            <p className="text-muted-foreground">Configure system parameters and modules.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;