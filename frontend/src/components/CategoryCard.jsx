export default function CategoryCard({ title, img }) {
  return (
    <div className="border p-4 rounded-lg overflow-hidden">
      <img src={img} className="w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <button className="mt-3 text-sm font-medium underline">Shop now →</button>
    </div>
  );
}