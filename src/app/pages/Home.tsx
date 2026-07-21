import { Link } from "react-router";
import { Calendar, Heart, Users, Book, Clock, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import bannerJubileu from "../../imports/jubileu-pnsl-banner120x80.png";

export function Home() {
  const masses = [
    { day: "Segunda a Sexta", time: "19h00" },
    { day: "Sábado", time: "19h00" },
    { day: "Domingo", time: "7h00, 9h00 e 19h00" },
  ];

  const events = [
    {
      title: "Festa de Nossa Senhora de Lourdes",
      date: "11 de Fevereiro de 2026",
      description: "Celebração da padroeira com procissão, missa solene e festividades.",
    },
    {
      title: "Catequese de Primeira Comunhão",
      date: "Todo Sábado às 15h",
      description: "Preparação para o Sacramento da Eucaristia para crianças.",
    },
    {
      title: "Grupo de Oração",
      date: "Toda Quinta-feira às 19h30",
      description: "Momento de louvor, adoração e intercessão.",
    },
  ];

  const pastorals = [
    {
      icon: Heart,
      title: "Pastoral da Criança",
      description: "Cuidado e atenção às crianças e famílias",
    },
    {
      icon: Users,
      title: "Pastoral Familiar",
      description: "Fortalecimento da família cristã",
    },
    {
      icon: Book,
      title: "Catequese",
      description: "Formação na fé para todas as idades",
    },
    {
      icon: Heart,
      title: "Pastoral da Saúde",
      description: "Visitas e acolhimento aos enfermos",
    },
  ];

  return (
    <div>
      {/* Banner 70 Anos */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src={bannerJubileu} 
              alt="Jubileu de Platina - 70 Anos Paróquia Nossa Senhora de Lourdes" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1636562705007-67a52b138df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGNodXJjaCUyMGludGVyaW9yJTIwYWx0YXJ8ZW58MXx8fHwxNzc2MjU2MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Paróquia Nossa Senhora de Lourdes
          </h1>
          <p className="text-xl md:text-2xl mb-2">Pirapama - Pernambuco</p>
          <p className="text-lg md:text-xl mb-8">Arquidiocese de Olinda e Recife</p>
          <p className="text-xl md:text-2xl font-semibold mb-8">
            Celebrando 70 anos de Fé e Comunhão
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/missas">
                <Clock className="w-5 h-5 mr-2" />
                Horários de Missas
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/contato">
                <MapPin className="w-5 h-5 mr-2" />
                Como Chegar
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mensagem do Pároco */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1774404652459-1c532bcdb0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMHByaWVzdCUyMGNlbGVicmF0aW5nJTIwbWFzc3xlbnwxfHx8fDE3NzYyNTYxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Padre"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Mensagem do Pároco</h2>
                <p className="text-gray-700 mb-4">
                  "Queridos irmãos e irmãs em Cristo, é com grande alegria que os recebo em nossa
                  comunidade paroquial. A Paróquia Nossa Senhora de Lourdes é um lugar de encontro,
                  acolhimento e crescimento na fé."
                </p>
                <p className="text-gray-700 mb-4">
                  "Neste ano em que celebramos 70 anos de história, renovamos nosso compromisso de
                  servir, evangelizar e construir juntos o Reino de Deus. Sejam sempre bem-vindos!"
                </p>
                <p className="font-semibold text-gray-900">
                  Pe. José Carlos da Silva<br />
                  <span className="text-sm text-gray-600">Pároco</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horários de Missas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Horários de Missas
            </h2>
            <p className="text-gray-600 text-lg">
              Junte-se a nós para celebrar a Eucaristia
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {masses.map((mass, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-blue-900" />
                        <span className="font-semibold text-lg text-gray-900">{mass.day}</span>
                      </div>
                      <span className="text-xl font-bold text-blue-900">{mass.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button asChild variant="link" className="text-blue-600">
                    <Link to="/missas">
                      Ver mais informações
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-gray-600 text-lg">
              Confira as atividades e celebrações da nossa comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pastorais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nossas Pastorais
            </h2>
            <p className="text-gray-600 text-lg">
              Venha participar e servir à comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pastorals.map((pastoral, index) => {
              const Icon = pastoral.icon;
              return (
                <Card
                  key={index}
                  className="shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <CardTitle className="text-lg">{pastoral.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {pastoral.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              <Link to="/pastorais">
                Conheça todas as Pastorais
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nossa Senhora de Lourdes */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1581615621517-5e8536c90c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3NzYSUyMHNlbmhvcmElMjB2aXJnaW4lMjBtYXJ5JTIwc3RhdHVlfGVufDF8fHx8MTc3NjI1NjE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Senhora de Lourdes</h2>
            <p className="text-lg mb-4">
              "Eu sou a Imaculada Conceição" - foram as palavras da Virgem Maria a Santa Bernadette
              nas aparições de Lourdes em 1858.
            </p>
            <p className="text-lg mb-6">
              Nossa paróquia tem a graça de ter como padroeira Nossa Senhora de Lourdes, que nos
              ensina o caminho da humildade, da oração e da conversão.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/sobre">
                Conheça Nossa História
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Faça Parte da Nossa Comunidade
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Todos são bem-vindos para participar das nossas celebrações, eventos e atividades.
                Venha conhecer nossa comunidade paroquial!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-900">
                  <Link to="/sobre">Saiba Mais</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}