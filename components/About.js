function About() {
  try {
    const features = [
      {
        icon: 'award',
        title: '15+ Years Experience',
        description: 'Trusted eye care specialists'
      },
      {
        icon: 'shield-check',
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment'
      },
      {
        icon: 'users',
        title: 'Expert Team',
        description: 'Qualified ophthalmologists'
      },
      {
        icon: 'clock',
        title: '24/7 Emergency',
        description: 'Round-the-clock care'
      }
    ];

    return (
      <section id="about" className="section-padding bg-[var(--secondary-color)]" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Eye specialist examining patient"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-6">About Kanjnetra Eye Hospital</h2>
              <p className="text-lg text-[var(--text-light)] mb-8 leading-relaxed">
                Established as a premier eye care center in Anisabad, Patna, Kanjnetra Eye Hospital has been providing 
                exceptional eye care services with a commitment to excellence, innovation, and patient satisfaction.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-8 leading-relaxed">
                Our team of experienced ophthalmologists and support staff work together to provide comprehensive 
                eye care services using the latest technology and treatment methods.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <div className={`icon-${feature.icon} text-lg text-[var(--primary-color)]`}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-dark)] mb-1">{feature.title}</h4>
                      <p className="text-sm text-[var(--text-light)]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
