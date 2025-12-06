export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b flex justify-between items-center bg-white">
      <div className="font-bold text-xl">LuxeBouquets</div>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>Shop</li>
        <li>Contact</li>
        <li>Sign in</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}
