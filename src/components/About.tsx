import about1 from '../assets/durian.jpeg'
import about2 from '../assets/5-vanda.jpeg'
import about3 from '../assets/sustain-living.jpeg'



const About = () => {
  const cards = [
    {
      title: 'Outer Baduy Culture',
      description: 'Experience the unique lifestyle of Outer Baduy communities, where traditional practices blend with selective modern adaptations.',
      image: about1
    },
    {
      title: 'Inner Baduy Traditions',
      description: 'Learn about the strictly preserved traditions of Inner Baduy, where ancient customs and spiritual practices remain unchanged for centuries.',
      image: about2
    },
    {
      title: 'Sustainable Living',
      description: 'Witness a harmonious relationship with nature through sustainable farming, handcrafted textiles, and self-sufficient community practices.',
      image: about3
    }
  ];

  return (
    <section id="about" className="section-padding bg-stone-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">About Baduy Village</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">
              Tucked away in the mountains of Banten province in Indonesia, the Baduy people maintain one of the most 
              preserved indigenous cultures in the world. Divided into Inner Baduy (Baduy Dalam) and Outer Baduy 
              (Baduy Luar), these communities live by strict ancestral traditions that govern every aspect of their lives.
            </p>
            <p>
              Our community-based tours offer a rare opportunity to experience this unique culture with respect and 
              authenticity. By traveling with local Baduy guides, you contribute directly to the community while gaining 
              insights few outsiders ever experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="card group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="card-img transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{card.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-stone-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;