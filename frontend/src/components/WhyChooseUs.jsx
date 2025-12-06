export default function WhyChooseUs() {
  const items = [
    {
      title: "Stylish Bouquets",
      text: "Designed by top florists using fresh, premium flowers."
    },
    {
      title: "On-Time Delivery",
      text: "Fast and reliable delivery service straight to your door."
    },
    {
      title: "Safe Payment",
      text: "Secure online payments for a smooth checkout."
    },
    {
      title: "Subscription Plans",
      text: "Customized weekly or monthly flower subscriptions."
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
