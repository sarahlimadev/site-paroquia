import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "../../imports/logo70anos.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Missas", href: "/missas" },
    { name: "Sacramentos", href: "/sacramentos" },
    { name: "Pastorais", href: "/pastorais" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(81) 3555-1234</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>paroquia@nslourdespirapama.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Pirapama, PE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
            <div className="hidden md:block">
              <h1 className="font-semibold text-lg text-blue-900">
                Paróquia Nossa Senhora de Lourdes
              </h1>
              <p className="text-sm text-gray-600">
                Pirapama - Arquidiocese de Olinda e Recife
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Title */}
        <div className="md:hidden mt-3 text-center">
          <h1 className="font-semibold text-base text-blue-900">
            Paróquia Nossa Senhora de Lourdes
          </h1>
          <p className="text-xs text-gray-600">
            Pirapama - Arquidiocese de Olinda e Recife
          </p>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
