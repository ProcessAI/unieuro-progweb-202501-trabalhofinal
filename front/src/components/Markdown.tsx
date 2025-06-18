import React, { useState, useRef, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";
import { HelpMarkdown } from "./Helpmarkdown";

interface MarkdownProps {
  value?: string;
  onChange?: (value: string) => void;
  onSave?: (markdown: string, imagens: Record<string, string>) => void; // opcional para salvar externamente
}

export default function Markdown({ value = "", onChange, onSave }: MarkdownProps) {
  const [markdown, setMarkdown] = useState<string>(value);
  const [modo, setModo] = useState<"escrever" | "visualizar">("escrever");
  const [imagens, setImagens] = useState<Record<string, string>>({});
  const [contadorImagens, setContadorImagens] = useState(0);
  const refTextarea = useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    setMarkdown(value);
  }, [value]);

  const handleMarkdownChange = (newValue: string) => {
    setMarkdown(newValue);
    onChange?.(newValue);
  };

  const aoEnviarImagem = (e: ChangeEvent<HTMLInputElement>) => {
    const arquivos = e.target.files;
    if (!arquivos || arquivos.length === 0) return;

    const arquivo = arquivos[0];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (arquivo.size > maxSize) {
      alert('Arquivo muito grande. Máximo 5MB.');
      return;
    }

    const leitor = new FileReader();

    leitor.onloadend = () => {
      if (!leitor.result) return;

      const base64String = leitor.result as string;
      const idImagem = `imagem-${contadorImagens + 1}`;

      // Salva base64 no estado das imagens
      setImagens(prev => ({ ...prev, [idImagem]: base64String }));
      setContadorImagens(prev => prev + 1);

      // Insere a tag curta no markdown
      const markdownImagem = `![${arquivo.name}](#${idImagem})`;
      inserirNoCursor(markdownImagem);

      e.target.value = "";
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

    handleMarkdownChange(atualizado);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(inicio + texto.length, inicio + texto.length);
    }, 0);
  };

  const salvarConteudo = () => {
    // Exemplo: chama callback para salvar markdown + imagens
    if (onSave) {
      onSave(markdown, imagens);
    } else {
      alert("Implementar função onSave para salvar o conteúdo.");
      // Ou pode salvar localStorage etc
    }
  };

  const componentes = {
    img: ({ src, alt }: { src?: string; alt?: string }) => {
      if (!src) return null;

      // Se src começar com #, troca pelo base64 guardado
      if (src.startsWith("#")) {
        const idImagem = src.slice(1);
        const base64 = imagens[idImagem];
        if (base64) src = base64;
        else src = ""; // fallback vazio ou pode colocar placeholder
      }

      const estilo: React.CSSProperties = {
        maxWidth: "100%",
        height: "auto",
        maxHeight: "400px",
        objectFit: "contain",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "4px",
      };
      return <img src={src} alt={alt || ""} style={estilo} />;
    },
  };

  return (
    <div className="editor-container">
      <div className="editor-header">
        <div>
          <button onClick={() => setModo("escrever")} disabled={modo === "escrever"}>
            Escrever
          </button>
          <button onClick={() => setModo("visualizar")} disabled={modo === "visualizar"}>
            Visualizar
          </button>
          <HelpMarkdown />
        </div>
        {modo === "escrever" && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={aoEnviarImagem}
              title="Adicionar imagem (máx. 5MB)"
            />
            <button onClick={() => handleMarkdownChange("")}>Limpar</button>
            <button onClick={salvarConteudo}>Salvar</button>
          </div>
        )}
      </div>

      {modo === "escrever" ? (
        <textarea
          ref={refTextarea}
          value={markdown}
          onChange={(e) => handleMarkdownChange(e.target.value)}
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
