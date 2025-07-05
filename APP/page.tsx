export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Poder IA</h1>

      <div className="grid gap-4">
        <BoosterCard
          title="🧠 Criador de Produtos Inovadores"
          description="Gere ideias de produtos únicos e digitais com alto potencial de lucro."
        />
        <BoosterCard
          title="🎬 Roteiro de Vídeos Virais"
          description="Receba gancho + roteiro + CTA para vídeos que explodem no TikTok e Instagram."
        />
        <BoosterCard
          title="🛍️ Página de Vendas Automática"
          description="Crie páginas de venda persuasivas com IA em poucos cliques."
        />
        <BoosterCard
          title="🕵️ Espionagem de Concorrência"
          description="Descubra o que os top players do seu nicho estão fazendo e modele com inteligência."
        />
        <BoosterCard
          title="📂 Chat com IA + Upload de Arquivos"
          description="Converse com a IA, envie arquivos e resolva tudo em um só lugar."
        />
      </div>
    </div>
  )
}

function BoosterCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-2xl p-4 shadow bg-white hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
