export default function ContactSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-4">To Contact Us</h2>

      <div className="flex gap-4 max-w-md">
        <input
          className="flex-grow border p-3 rounded"
          placeholder="Your email..."
        />
        <button className="px-6 py-3 bg-black text-white rounded">
          Book a Call
        </button>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold">Phone</p>
          <p>+38011 222 333</p>

          <p className="font-semibold mt-4">Address</p>
          <p>Kyiv, Some Street 99</p>
        </div>

        <img
          className="rounded-lg w-full object-cover"
          src="https://images.unsplash.com/photo-1593952937245-7d674292a524"
        />
      </div>
    </section>
  );
}
