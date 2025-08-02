export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nguyen Ngoc Minh. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/kat-minh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <a href="mailto:katminh.dev@gmail.com" className="text-gray-400 hover:text-white">
              Email
            </a>
            <a href="tel:0394629319" className="text-gray-400 hover:text-white">
              Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
