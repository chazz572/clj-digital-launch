import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const members = [
  { letter: "C", name: "Chase", phone: "8174705256", email: "chase.simpson@aol.com" },
  { letter: "J", name: "Justin", phone: "6197801789", email: "justin.resendez16@gmail.com" },
  { letter: "L", name: "Logan", phone: "8179460780", email: "loganeberlewalter@gmail.com" },
];

const TeamSection = () => (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
    </div>

    <div className="container max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Meet <span className="text-gradient">C</span>hase, <span className="text-gradient">J</span>ustin & <span className="text-gradient">L</span>ogan
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <motion.div
            key={m.letter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="p-8 rounded-2xl glass-card gradient-border text-center transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 border border-accent/20 shadow-[0_0_20px_hsl(190_90%_50%/0.1)]"
            >
              <span className="text-3xl font-black text-accent">{m.letter}</span>
            </motion.div>
            <h3 className="text-xl font-bold text-foreground mb-5">{m.name}</h3>
            <div className="space-y-3">
              <a href={`tel:${m.phone}`} className="group flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                {m.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
              </a>
              <a href={`mailto:${m.email}`} className="group flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                <Mail className="w-4 h-4 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                {m.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
