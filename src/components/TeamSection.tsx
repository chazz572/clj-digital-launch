import { Phone, Mail } from "lucide-react";

const members = [
  { letter: "C", name: "Chase", phone: "8174705256", email: "chase.simpson@aol.com" },
  { letter: "L", name: "Logan", phone: "8179460780", email: "loganeberlewalter@gmail.com" },
  { letter: "J", name: "Justin", phone: "6197801789", email: "Justin.Resendez16@gmail.com" },
];

const TeamSection = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">The Team</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Meet <span className="text-gradient">C</span>hase, <span className="text-gradient">L</span>ogan & <span className="text-gradient">J</span>ustin
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {members.map((m) => (
          <div
            key={m.letter}
            className="p-6 rounded-xl bg-card border border-border text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-black text-accent">{m.letter}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{m.name}</h3>
            <div className="space-y-2">
              <a href={`tel:${m.phone}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                {m.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
              </a>
              <a href={`mailto:${m.email}`} className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {m.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
