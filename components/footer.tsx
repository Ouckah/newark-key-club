const Footer = () => {
  return (
    <footer className="bg-newark-red border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <div className="uppercase text-sm tracking-wider"></div>
        </div>
        <div className="text-white text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://github.com/Ouckah" className="hover:text-gray-200">
            Aidan Ouckama
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
