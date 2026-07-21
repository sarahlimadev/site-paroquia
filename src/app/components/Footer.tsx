import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";
import logoPreto from "../../imports/logo70anospreto.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <img src={logoPreto} alt="Logo" className="h-16 mb-4 brightness-0 invert" />
            <h3 className="text-white font-semibold mb-2">
              Paróquia Nossa Senhora de Lourdes
            </h3>
            <p className="text-sm text-gray-400">
              Pirapama - Arquidiocese de Olinda e Recife
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Celebrando 70 anos de fé e comunhão
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/missas" className="hover:text-white transition-colors">
                  Horários de Missas
                </Link>
              </li>
              <li>
                <Link to="/sacramentos" className="hover:text-white transition-colors">
                  Sacramentos
                </Link>
              </li>
              <li>
                <Link to="/pastorais" className="hover:text-white transition-colors">
                  Pastorais
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Praça da Matriz, s/n<br />
                  Pirapama, PE - CEP 55578-000
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">(81) 3555-1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm break-all">paroquia@nslourdespirapama.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Secretaria:<br />
                  Seg a Sex: 8h às 12h / 14h às 17h
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <p className="text-sm text-gray-400 mb-4">
              Acompanhe nossas atividades e fique por dentro das novidades
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © 2026 Paróquia Nossa Senhora de Lourdes de Pirapama. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
