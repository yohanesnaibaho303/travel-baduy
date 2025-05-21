import about1 from "../assets/durian.jpeg";
import about2 from "../assets/5-vanda.jpeg";
import about3 from "../assets/sustain-living.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("about.cards.outer.title"),
      description: t("about.cards.outer.description"),
      image: about1,
    },
    {
      title: t("about.cards.inner.title"),
      description: t("about.cards.inner.description"),
      image: about2,
    },
    {
      title: t("about.cards.sustainable.title"),
      description: t("about.cards.sustainable.description"),
      image: about3,
    },
  ];

  return (
    <section id="about" className="section-padding bg-stone-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">
            {t("about.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">{t("about.description")}</p>
            <p>{t("about.description2")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-img transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {card.title}
                </h3>
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
