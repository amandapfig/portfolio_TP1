import { Sobre } from "./secoes/Sobre";
import { Habilidades } from "./secoes/Habilidades";
import { Projetos } from "./secoes/Projetos";
import { Hobbies } from "./secoes/Hobbies";
import { Formacao } from "./secoes/Formacao";
import { Contato } from "./secoes/Contato";

const SECOES = {
  "who-am-i": Sobre,
  "my-skills": Habilidades,
  "my-projects": Projetos,
  "beyond-the-code": Hobbies,
  "my-journey": Formacao,
  "lets-connect": Contato,
};

export function TrackContent({ activeTrackId }) {
  const SecaoAtual = SECOES[activeTrackId] || Sobre;
  return <SecaoAtual />;
}