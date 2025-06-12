import React, { useState, useRef, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";
import "./EditorMarkdown.css"; // CSS do editor

export default function Markdown() {
  const [markdown, setMarkdown] = useState<string>("");
  const [modo, setModo] = useState<"escrever" | "visualizar">("escrever");
  const [imagens, setImagens] = useState<Record<string, string>>({});
  const refTextarea = useRef<HTMLTextAreaElement>(null);

  const aoEnviarImagem = (e: ChangeEvent<HTMLInputElement>) => {
    const arquivos = e.target.files;
    if (!arquivos || arquivos.length === 0) return;

    const arquivo = arquivos[0];
    const leitor = new FileReader();

    leitor.onloadend = () => {
      if (!leitor.result) return;

      const idImagem = `imagem-${Date.now()}`;
      setImagens((anterior) => ({
        ...anterior,
        [idImagem]: leitor.result as string,
      }));

      const markdownImagem = `![${arquivo.name}](${idImagem})`;
      inserirNoCursor(markdownImagem);

      e.target.value = ""; // limpa input
    };

    leitor.readAsDataURL(arquivo);
  };

  const inserirNoCursor = (texto: string) => {
    const textarea = refTextarea.current;
    if (!textarea) return;

    const inicio = textarea.selectionStart;
    const fim = textarea.selectionEnd;

    const antes = markdown.slice(0, inicio);
    const depois = markdown.slice(fim);
    const atualizado = antes + texto + depois;

    setMarkdown(atualizado);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        inicio + texto.length,
        inicio + texto.length
      );
    }, 0);
  };

 const componentes = {
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    const imagemSrc = src && imagens[src] ? imagens[src] : src;
    const estilo: React.CSSProperties = {
      width: "200px",
      height: "200px",
      objectFit: "contain",
    };
    return <img src={imagemSrc} alt={alt || ""} style={estilo} />;
  },
};

  return (
    <div className="editor-container">
      <div className="editor-header">
        <div>
          <button
            onClick={() => setModo("escrever")}
            disabled={modo === "escrever"}
          >
            Escrever
          </button>
          <button
            onClick={() => setModo("visualizar")}
            disabled={modo === "visualizar"}
          >
            Visualizar
          </button>
        </div>
        {modo === "escrever" && (
          <div>
            <input type="file" accept="image/*" onChange={aoEnviarImagem} />
            <button onClick={() => setMarkdown("")}>Limpar</button>
          </div>
        )}
      </div>

      {modo === "escrever" ? (
        <textarea
          ref={refTextarea}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="editor-textarea"
          placeholder="Escreva seu markdown aqui..."
        />
      ) : (
        <div className="editor-preview">
          <ReactMarkdown components={componentes}>{markdown}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}