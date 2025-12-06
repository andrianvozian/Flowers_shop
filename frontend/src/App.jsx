import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import freshFlowers from "../assets/categories_images/image5.jpg";
import driedFlowers from "../assets/categories_images/image1.jpg";
import livePlants from "../assets/categories_images/image2.jpg";
import aromaCandles from "../assets/categories_images/image4.jpg";
import fresheners from "../assets/categories_images/image3.jpg";

export default function Home() {
  const categories = [
    { title: "Fresh Flowers", img: freshFlowers },
    { title: "Dried Flowers", img: driedFlowers },
    { title: "Live Plants", img: livePlants },
    { title: "Aroma Candles", img: aromaCandles },
    { title: "Fresheners", img: fresheners },
  ];

  return (
    <div className="w-full">
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold leading-tight">
            Kyiv LuxeBouquets®
          </h1>
          <p className="mt-4 text-gray-600">
            Discover modern bouquets handcrafted by local florists.
          </p>
        </div>

        {categories.map((cat, i) => (
          <CategoryCard key={i} title={cat.title} img={cat.img} />
        ))}
      </section>

      <AboutSection />
      <WhyChooseUs />
      <ContactSection />

      <section className="py-16 px-4 grid md:grid-cols-2 gap-8">
        <ServiceCard
          title="Flower Subscriptions"
          desc="Enjoy weekly or monthly fresh flowers delivered right to your home."
          img="https://images.unsplash.com/photo-1526040652367-ac003a0475fe"
        />
        <ServiceCard
          title="Wedding & Event Decor"
          desc="Let our floral designers create breathtaking arrangements for your event."
          img="https://images.unsplash.com/photo-1521336575822-6da63fb45455"
        />
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}
