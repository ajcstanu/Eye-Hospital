function Announcements() {
  try {
    const [announcements, setAnnouncements] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadAnnouncements();
    }, []);

    const loadAnnouncements = async () => {
      try {
        setLoading(true);
        const result = await trickleListObjects('announcement', 10, true);
        setAnnouncements(result.items || []);
      } catch (error) {
        console.error('Error loading announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    if (loading || announcements.length === 0) {
      return null;
    }

    return (
      <section className="bg-[var(--accent-color)] text-white py-4" data-name="announcements" data-file="components/Announcements.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4">
            <div className="icon-megaphone text-xl"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">Latest Updates:</div>
              <div className="text-sm">
                {announcements.map((announcement, index) => (
                  <span key={announcement.objectId}>
                    {announcement.objectData.message}
                    {index < announcements.length - 1 && ' • '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Announcements component error:', error);
    return null;
  }
}
