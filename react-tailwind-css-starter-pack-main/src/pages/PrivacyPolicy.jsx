import React from "react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="w-12 h-px bg-[#c9a84c]/40" />
      <span className="text-[#c9a84c] text-xs">✦</span>
      <div className="w-12 h-px bg-[#c9a84c]/40" />
    </div>
  );
}
function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h2
        className="text-xl md:text-2xl text-[#f5f0e8]"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {title}
      </h2>
      <div className="w-10 h-px bg-[#c9a84c]/40" />
      <div className="text-[#f5f0e8]/50 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function PrivacyPolicy() {
    const {t} = useTranslation();
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f5f0e8] pt-[72px]">

      {/* ── Hero Header ── */}
      <div className="relative border-b border-[#c9a84c]/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
        />
        <div className="relative z-10 text-center py-16 px-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-3">
            {t("PrivacyPolicy")}
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#f5f0e8] leading-none"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("LegalPolicy")}
          </h1>
          <GoldDivider />
          <p className="text-[#f5f0e8]/30 text-xs tracking-[3px] uppercase mt-4">
           {t("PolicyActivation")}:  March 21, 2026
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 space-y-12">

        {/* Intro */}
        <p className="text-[#f5f0e8]/50 text-sm leading-relaxed border-l-2 border-[#c9a84c]/30 pl-5">
          O Restaurante Dhiman's Kebab and Pizza valoriza a sua privacidade e está empenhado em proteger
          as suas informações pessoais. Esta Política de Privacidade descreve como recolhemos, utilizamos,
          armazenamos e partilhamos os seus dados quando interage com o nosso restaurante, website ou serviços.
          <br /><br />
          Utilizamos os seus dados pessoais para fornecer e melhorar o Serviço. Ao utilizar o Serviço, concorda com a recolha e utilização de informações de acordo com esta Política de Privacidade.
        </p>

        {/* 1 */}
        <Section title="Interpretação e Definições">
          <p className="text-[#c9a84c]/80 text-xs tracking-[2px] uppercase">Interpretação</p>
          <p>
            Nesta Política de Privacidade, as palavras e frases utilizadas são definidas para garantir clareza
            e consistência. A interpretação destes termos aplica-se uniformemente em todo o documento,
            independentemente de aparecerem no singular ou no plural.
          </p>

          <p className="text-[#c9a84c]/80 text-xs tracking-[2px] uppercase mt-4">Definições</p>
          <ul className="space-y-3 mt-2">
            {[
              { term: "Restaurant", def: "Restaurante Dhiman's Kebab e Pizza, sito na Rua do Rosmaninho Lote 5 Esq, 2135-083 Samora Correia, Portugal." },
              { term: "Services", def: "Todas as atividades, produtos e ofertas fornecidas pelo restaurante, incluindo refeições e encomendas online." },
              { term: "Cookies", def: "Pequenos ficheiros colocados no seu dispositivo, contendo os detalhes do seu histórico de navegação." },
              { term: "Country", def: "Samora Correia, Portugal." },
              { term: "Device", def: "Qualquer dispositivo que possa aceder ao Serviço como um computador, telemóvel ou tablet digital." },
              { term: "Personal Data", def: "Qualquer informação que o identifique como indivíduo, como o seu nome, dados de contacto, morada e informações de pagamento." },
              { term: "Service Provider", def: "Qualquer pessoa singular ou coletiva que trata os dados em nome da Empresa, incluindo empresas terceirizadas." },
              { term: "Usage Data", def: "Informações recolhidas automaticamente, como o seu endereço IP, o tipo de navegador e a atividade no website." },
              { term: "Website", def: "A nossa plataforma online, acessível em https://dhimanskebabpizza.pt" },
              { term: "You", def: "O indivíduo que acede ou utiliza o Serviço, ou a empresa em nome da qual tal indivíduo está a aceder." },
            ].map(({ term, def }) => (
              <li key={term} className="flex gap-2">
                <span className="text-[#c9a84c] font-semibold flex-shrink-0">{term}:</span>
                <span>{def}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 2 */}
        <Section title="Recolhendo e Usando os Seus Dados Pessoais">
          <p className="text-[#c9a84c]/80 text-xs tracking-[2px] uppercase">Dados Pessoais</p>
          <p>
            Ao utilizar o Nosso Serviço, poderemos solicitar que nos forneça determinadas informações
            pessoalmente identificáveis. As informações pessoalmente identificáveis podem incluir, mas não
            estão limitadas a:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>

          <p className="text-[#c9a84c]/80 text-xs tracking-[2px] uppercase mt-4">Dados de Utilização</p>
          <p>
            Os Dados de Utilização são recolhidos automaticamente ao utilizar o Serviço e podem incluir
            informações como o endereço IP do seu dispositivo, o tipo de browser, as páginas do nosso Serviço
            que visita, a hora e a data da sua visita, o tempo gasto nessas páginas e outros dados de diagnóstico.
          </p>
          <p>
            Quando acede ao Serviço através de um dispositivo móvel, podemos recolher determinadas informações
            automaticamente, incluindo o tipo de dispositivo móvel, o ID único do seu dispositivo, o endereço
            IP do dispositivo e o seu sistema operativo.
          </p>
        </Section>

        {/* 3 */}
        <Section title="Tecnologias de Rastreio e Cookies">
          <p>
            Utilizamos Cookies e tecnologias de rastreio semelhantes para rastrear a atividade no Nosso
            Serviço e armazenar determinadas informações. As tecnologias que utilizamos podem incluir:
          </p>
          <ul className="space-y-3 pl-2">
            <li>
              <span className="text-[#c9a84c]">Cookies do navegador —</span> Um pequeno ficheiro colocado
              no seu dispositivo. Pode instruir o seu navegador para recusar todos os cookies ou indicar
              quando um cookie está a ser enviado.
            </li>
            <li>
              <span className="text-[#c9a84c]">Web Beacons —</span> Pequenos ficheiros eletrónicos que
              permitem à Empresa contar os utilizadores que visitaram determinadas páginas ou abriram
              um e-mail e para outras estatísticas relacionadas com o site.
            </li>
          </ul>
        </Section>

        {/* 4 */}
        <Section title="Utilização dos Seus Dados Pessoais">
          <p>A Empresa poderá utilizar os Dados Pessoais para os seguintes fins:</p>
          <ul className="space-y-2 pl-2">
            {[
              "Para fornecer e manter o nosso serviço, inclusive para monitorizar a utilização do Nosso Serviço.",
              "Para gerir a sua conta e o seu registo como utilizador do Serviço.",
              "Para entrar em contacto consigo por e-mail, telefone, SMS ou outras formas de comunicação eletrónica.",
              "Para gerir as suas solicitações e pedidos.",
              "Para análise de dados, identificação de tendências de utilização e melhoria dos nossos serviços.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#c9a84c] flex-shrink-0">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">Podemos partilhar as Suas informações pessoais nas seguintes situações:</p>
          <ul className="space-y-2 pl-2">
            {[
              "Com prestadores de serviços que auxiliam no processamento de encomendas, pagamentos e entregas.",
              "Para transferências de negócios — no caso de uma fusão, aquisição ou venda de ativos.",
              "Requisitos Legais — se exigido por lei, para cumprir processos legais ou para proteger os nossos direitos.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#c9a84c] flex-shrink-0">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 5 */}
        <Section title="Retenção dos Seus Dados Pessoais">
          <p>
            A Empresa conservará os Seus Dados Pessoais apenas durante o tempo necessário para os fins
            estabelecidos nesta Política de Privacidade. Reteremos e utilizaremos os Seus Dados Pessoais
            na medida necessária para cumprir as nossas obrigações legais, resolver litígios e fazer cumprir
            os nossos acordos e políticas legais.
          </p>
          <p>
            A Empresa também conservará os Dados de Utilização para fins de análise interna. Os Dados de
            Utilização são geralmente conservados por um período de tempo mais curto, exceto quando utilizados
            para reforçar a segurança ou melhorar a funcionalidade do Nosso Serviço.
          </p>
        </Section>

        {/* 6 */}
        <Section title="Eliminar os Seus Dados Pessoais">
          <p>
            Quando os seus dados pessoais já não forem necessários para os fins para os quais foram recolhidos,
            tomamos as medidas adequadas para os eliminar ou anonimizar de forma segura. A eliminação envolve
            a remoção completa dos seus dados dos nossos sistemas, garantindo que não podem ser acedidos,
            restaurados ou utilizados de qualquer forma.
          </p>
          <p>
            Pode atualizar, alterar ou eliminar as Suas informações a qualquer momento, acedendo à Sua Conta
            e visitando a secção de definições da conta, ou contactando-nos diretamente para solicitar acesso,
            corrigir ou eliminar quaisquer informações pessoais que nos tenha fornecido.
          </p>
        </Section>

        {/* 7 */}
        <Section title="Divulgação dos Seus Dados Pessoais">
          <p className="text-[#c9a84c]/80 text-xs tracking-[2px] uppercase">Transações Comerciais</p>
          <p>
            No caso de uma fusão, aquisição ou venda de ativos, os seus dados pessoais poderão ser
            transferidos como parte da transação.
          </p>
          <p className="text-[#c9a84c]/80 text-xs tracking-[2px] uppercase mt-4">Requisitos Legais</p>
          <p>
            Se exigido por lei, poderemos divulgar as suas informações para cumprir processos legais ou
            para proteger os nossos direitos.
          </p>
        </Section>

        {/* 8 */}
        <Section title="Segurança dos Seus Dados Pessoais">
          <p>
            Tomamos medidas razoáveis para proteger os seus dados pessoais contra acesso não autorizado,
            alteração, divulgação ou destruição. No entanto, nenhum método de transmissão ou armazenamento
            eletrónico é completamente seguro e não podemos garantir a segurança absoluta dos seus dados.
          </p>
          <p>
            Tem o direito de aceder, corrigir ou eliminar os seus dados pessoais, sujeito às leis aplicáveis.
            Se desejar exercer estes direitos, por favor contacte-nos diretamente.
          </p>
        </Section>

        {/* 9 */}
        <Section title="Links para Outros Sites">
          <p>
            O nosso Serviço pode fornecer links para outros sites para sua conveniência ou para fins
            informativos. Estes sites de terceiros não são operados ou controlados por nós e não somos
            responsáveis pelo conteúdo, práticas de privacidade ou termos de serviço de quaisquer sites
            vinculados.
          </p>
          <p>
            Aconselhamos vivamente que reveja as políticas de privacidade de quaisquer websites externos
            que visite para compreender como estes recolhem, utilizam e protegem os seus dados pessoais.
          </p>
        </Section>

        {/* 10 */}
        <Section title="Alterações a Esta Política de Privacidade">
          <p>
            Reservamo-nos o direito de atualizar ou fazer alterações a esta Política de Privacidade a qualquer
            momento. Quaisquer modificações ou atualizações serão publicadas nesta página com uma data de
            revisão atualizada.
          </p>
          <p>
            Avisaremos por e-mail e/ou um aviso em destaque no Nosso Serviço, antes da alteração entrar em
            vigor e atualizaremos a data "Última atualização" no topo desta Política de Privacidade.
          </p>
        </Section>

        {/* 11 — Contact */}
        <Section title="Contacte-nos">
          <p>Se tiver alguma dúvida sobre esta Política de Privacidade, pode contactar-nos:</p>
          <div className="border border-[#2a2a2a] p-5 space-y-3 mt-2">
            <p>
              <span className="text-[#c9a84c]">📧 Email: </span>
              <a href="mailto:mrdeep22ji@gmail.com"
                className="hover:text-[#c9a84c] transition-colors underline underline-offset-2">
                mrdeep22ji@gmail.com
              </a>
            </p>
            <p>
              <span className="text-[#c9a84c]">🌐 Website: </span>
              <a href="https://dhimanskebabpizza.pt/contact"
                target="_blank" rel="noreferrer"
                className="hover:text-[#c9a84c] transition-colors underline underline-offset-2">
                dhimanskebabpizza.pt/contact
              </a>
            </p>
            <p>
              <span className="text-[#c9a84c]">📍 Address: </span>
              Rua do Rosmaninho Lote 5 Esq, 2135-083 Samora Correia, Portugal
            </p>
          </div>
        </Section>

        {/* Bottom note */}
        <div className="border-t border-[#c9a84c]/10 pt-8 text-center">
          <GoldDivider />
          <p className="text-[#f5f0e8]/20 text-xs tracking-[2px] uppercase mt-4">
           © 2026 Dhiman's Kebab Pizza Cafe. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy