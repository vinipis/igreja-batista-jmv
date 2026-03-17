import { Globe, MapPin, Headphones, Play, Heart, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Acesse nosso Site", icon: Globe, href: "https://www.igrejabatistajmv.com.br" },
  { label: "Como Chegar", icon: MapPin, href: "https://www.waze.com/ul?ll=-23.636883,-46.7651654&navigate=yes" },
  { label: "Podcast Depois de Cristo!", icon: Headphones, href: "https://youtu.be/fhsGuLn5PAc" },
  { label: "Vídeos e Pregações", icon: Play, href: "https://www.youtube.com/@igrejabatistamariavirginia/shorts" },
  { label: "Projeto Vida & Futuro", icon: Heart, href: "https://www.instagram.com/projeto.vidaefuturo" },
  { label: "Fale Conosco", icon: Mail, href: "https://igrejabatistajmv.com.br/contato" },
];

const LinkBio = () => {
  return (
    <div className="min-h-screen bg-[hsl(30,20%,97%)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={logo}
            alt="Igreja Batista JMV"
            className="w-24 h-24 rounded-full object-cover shadow-elegant border-4 border-white"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">
              Igreja Batista JMV
            </h1>
            <p className="text-sm text-muted-foreground mt-1 italic">
              "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho."
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center w-full rounded-xl bg-primary text-primary-foreground py-4 px-5 font-medium text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-elegant active:scale-[0.98]"
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="flex-1 text-center pr-5">{label}</span>
            </a>
          ))}
        </div>

        {/* Social Footer */}
        <div className="flex items-center gap-5 pt-4">
          <a
            href="https://www.instagram.com/igrejabatista.mv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@igrejabatistamariavirginia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Igreja Batista JMV
        </p>
      </div>
    </div>
  );
};

export default LinkBio;
