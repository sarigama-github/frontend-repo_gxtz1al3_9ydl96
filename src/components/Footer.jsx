export default function Footer() {
  return (
    <footer className="border-t border-gray-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© 2025 Lumineux Labs. All rights reserved.</p>
        <nav className="flex items-center gap-5">
          <a href="#ingredients" className="hover:text-gray-900">Ingredients</a>
          <a href="#reviews" className="hover:text-gray-900">Reviews</a>
          <a href="#faq" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
