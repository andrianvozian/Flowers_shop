export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-100">
      <div className="grid md:grid-cols-4 gap-6">

        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <input className="border p-2 w-full rounded" placeholder="Email" />
          <button className="mt-3 w-full bg-black text-white p-2 rounded">
            Subscribe
          </button>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p>+380112233</p>
          <p>email@example.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-1">
            <li>All Products</li>
            <li>Fresh Flowers</li>
            <li>Dried Flowers</li>
            <li>Live Plants</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Delivery Policy</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
