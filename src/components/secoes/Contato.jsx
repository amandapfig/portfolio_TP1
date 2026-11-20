import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { PLAYLIST_INFO } from "../../data/playlistData";

export function Contato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.message.trim().length < 5) {
      setStatus({
        type: "error",
        text: "Preencha seu nome, um e-mail válido e uma mensagem com pelo menos 5 caracteres.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", text: "Mensagem enviada com sucesso!" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        text: "Não foi possível enviar pelo formulário agora. Você pode me chamar direto pelo e-mail ou WhatsApp.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="track-stage fade-in">
      <div className="stage-header">
        <div>
          <span className="track-kicker">FAIXA 06 • LET’S CONNECT</span>
          <h2>Vamos Conversar?</h2>
        </div>
      </div>

      <div className="connect-layout">
        <div className="connect-cards">
          <a href={"mailto:" + PLAYLIST_INFO.email} className="connect-card">
            <Mail size={22} />
            <div>
              <small>E-mail</small>
              <strong>{PLAYLIST_INFO.email}</strong>
            </div>
          </a>

          <a href={PLAYLIST_INFO.whatsappHref} target="_blank" rel="noreferrer" className="connect-card">
            <Phone size={22} />
            <div>
              <small>Telefone / WhatsApp</small>
              <strong>{PLAYLIST_INFO.phoneDisplay}</strong>
            </div>
          </a>

          <a href={PLAYLIST_INFO.githubProfile} target="_blank" rel="noreferrer" className="connect-card">
            <Github size={22} />
            <div>
              <small>GitHub</small>
              <strong>github.com/amandapfig</strong>
            </div>
          </a>

          {PLAYLIST_INFO.linkedinUrl && (
            <a href={PLAYLIST_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="connect-card">
              <Linkedin size={22} />
              <div>
                <small>LinkedIn</small>
                <strong>Acessar perfil</strong>
              </div>
            </a>
          )}
        </div>

        <form className="glass-card connect-form" onSubmit={handleContactSubmit}>
          <h3>Envie uma mensagem direta</h3>
          <label>
            Nome
            <input
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Mensagem
            <textarea
              rows="4"
              placeholder="Escreva sua mensagem..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          {status.text && <p className={"form-status " + status.type}>{status.text}</p>}

          <button type="submit" className="btn-send" disabled={sending}>
            <Send size={16} />
            {sending ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
}