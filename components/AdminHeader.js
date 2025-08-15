function AdminHeader() {
  try {
    return (
      <header className="bg-white shadow-md fixed w-full top-0 z-50" data-name="admin-header" data-file="components/AdminHeader.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                <div className="icon-shield text-lg text-white"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[var(--text-dark)]">Admin Panel</h1>
                <p className="text-sm text-[var(--text-light)]">Kanjnetra Eye Hospital</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open('owner.html', '_blank')}
                className="btn-secondary"
              >
                <div className="icon-user text-sm mr-2"></div>
                Owner Panel
              </button>
              <button 
                onClick={() => window.open('index.html', '_blank')}
                className="btn-secondary"
              >
                <div className="icon-home text-sm mr-2"></div>
                Website
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('AdminHeader component error:', error);
    return null;
  }
}
