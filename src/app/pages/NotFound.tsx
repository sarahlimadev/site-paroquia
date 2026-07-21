import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Página Não Encontrada
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Desculpe, a página que você está procurando não existe ou foi removida.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Voltar para Início
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" onClick={() => window.history.back()}>
              <button>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
