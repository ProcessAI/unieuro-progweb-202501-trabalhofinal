import React, { useState, useRef, ChangeEvent, useImperativeHandle, forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";
import { HelpMarkdown } from "./Helpmarkdown";

type Mode = "escrever" | "visualizar" | "somente-leitura";

interface MarkdownProps {
  value?: string;
  onChange?: (value: string) => void;
  onSave?: (markdown: string, imagens: Record<string, string>) => void;
  mode?: Mode;
}

export interface MarkdownRef {
  getEstadoAtual: () => { markdown: string; imagens: Record<string, string> };
}

const Markdown = forwardRef<MarkdownRef, MarkdownProps>(
  ({ value = "", onChange, onSave, mode = "escrever" }: MarkdownProps, ref) => {
    const [markdown, setMarkdown] = useState<string>(value);
    const [modo, setModo] = useState<Mode>(mode);
    const [imagens, setImagens] = useState<Record<string, string>>({});
    const [contadorImagens, setContadorImagens] = useState(0);
    const refTextarea = useRef<HTMLTextAreaElement>(null);

    // Expõe funções para o componente pai
    useImperativeHandle(ref, () => ({
      getEstadoAtual: () => ({ markdown, imagens })
    }));

    const convertGetImages = (markdownBruto: string): {
      markdownLimpo: string;
      imagensEncontradas: Record<string, string>;
    } => {
      const imagensEncontradas: Record<string, string> = {};

      // Procura por imagens com referência (#imagem-id) no markdown
      const regexImagemRef = /!\[.*?\]\(#(imagem-\d+)\)/g;
      let match;

      while ((match = regexImagemRef.exec(markdownBruto)) !== null) {
        const idImagem = match[1];
        if (idImagem && !imagensEncontradas[idImagem]) {
          imagensEncontradas[idImagem] = "";
          console.log("Imagem encontrada:", idImagem);
        }
      }

      // Procura por bloco de imagens (formato antigo)
      const blocoImagemMatch = markdownBruto.match(/<!--START IMAGES-->\s*([\s\S]*?)\s*<!--END IMAGES-->/);
      if (blocoImagemMatch) {
        const blocoImagem = blocoImagemMatch[1];
        const regex = /!\[(.*?)\]\((data:image\/[a-z]+;base64,[^)]+)\)/g;
        let matchBloco;

        while ((matchBloco = regex.exec(blocoImagem)) !== null) {
          const base64 = matchBloco[2];
          const idImagem = matchBloco[1];
          if (idImagem && base64) {
            imagensEncontradas[idImagem] = base64;
          }
        }

        // Remove o bloco de imagens do markdown bruto
        markdownBruto = markdownBruto.replace(/<!--START IMAGES-->.*?<!--END IMAGES-->/s, "");
      }

      return { markdownLimpo: markdownBruto, imagensEncontradas };
    };

    React.useEffect(() => {
      // Só processa imagens do value inicial, não reseta as imagens locais
      const { markdownLimpo, imagensEncontradas } = convertGetImages(value);
      console.log("Convertendo imagens do markdown inicial");
      console.log("Markdown limpo:", markdownLimpo);
      console.log("Imagens encontradas:", imagensEncontradas);
      
      setMarkdown(markdownLimpo);
      
      // Mescla as imagens encontradas com as existentes, sem sobrescrever
      if (Object.keys(imagensEncontradas).length > 0) {
        setImagens(prev => {
          const merged = { ...prev, ...imagensEncontradas };
          console.log("Imagens mescladas:", merged);
          return merged;
        });
        setContadorImagens(prev => Math.max(prev, Object.keys(imagensEncontradas).length));
      }
    }, []); // Remove dependência do value para não resetar as imagens locais

    // Novo useEffect para sincronizar apenas o markdown quando value muda externamente
    React.useEffect(() => {
      if (value && value !== markdown) {
        const { markdownLimpo } = convertGetImages(value);
        setMarkdown(markdownLimpo);
      }
    }, [value, markdown]);

    React.useEffect(() => {
      setModo(mode);
    }, [mode]);

    const handleMarkdownChange = (newValue: string) => {
      setMarkdown(newValue);
      onChange?.(newValue);
      
      // Salvamento automático a cada mudança (com debounce seria melhor para performance)
      if (onSave) {
        // Usa setTimeout para dar tempo de o estado atualizar
        setTimeout(() => {
          onSave(newValue, imagens);
        }, 100);
      }
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

        console.log("Base64 original:", base64String.substring(0, 50) + "...");
        console.log("ID da imagem:", idImagem);

        // Atualiza o estado das imagens primeiro
        const novasImagens = { ...imagens, [idImagem]: base64String };
        setImagens(novasImagens);
        setContadorImagens(prev => prev + 1);

        // Insere a tag curta no markdown
        const markdownImagem = `![${arquivo.name}](#${idImagem})`;
        inserirNoCursor(markdownImagem);

        // Salva automaticamente quando uma imagem é adicionada
        if (onSave) {
          setTimeout(() => {
            onSave(markdown + markdownImagem, novasImagens);
          }, 100);
        }

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
      if (onSave) {
        onSave(markdown, imagens);
      } else {
        alert("Implementar função onSave para salvar o conteúdo.");
      }
    };

    const componentes = {
      img: ({ src, alt }: { src?: string; alt?: string }) => {
        if (!src) return null;

        // Se src começar com #, troca pelo base64 guardado
        if (src.startsWith("#")) {
          const idImagem = src.slice(1);
          const base64 = imagens[idImagem];
          console.log("Procurando imagem:", idImagem, "Encontrada:", !!base64);
          
          if (base64) {
            src = base64;
            console.log("Base64 recuperado:", src.substring(0, 50) + "...");
          } else {
            // Placeholder para imagem não encontrada
            return (
              <div style={{
                width: "200px",
                height: "100px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed #ccc",
                borderRadius: "4px"
              }}>
                Imagem não encontrada: {idImagem}
              </div>
            );
          }
        }

        // Correção mais robusta para URLs duplicadas
        if (src.startsWith("data:image/") && src.includes(",data:image/")) {
          console.warn("URL duplicada detectada, corrigindo...");
          // Encontra a primeira vírgula seguida de data:image e remove tudo antes dela
          const index = src.indexOf(",data:image/");
          if (index !== -1) {
            src = src.substring(index + 1); // Remove a vírgula também
            console.log("URL corrigida:", src.substring(0, 50) + "...");
          }
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
        
      return (
        <img 
          src={src} 
          alt={alt || ""} 
          style={estilo} 
          onError={(e) => {
            console.error("Erro ao carregar imagem. URL:", e.currentTarget.src.substring(0, 100) + "...");
          }} 
          onLoad={() => {
            console.log("Imagem carregada com sucesso!");
          }} 
        />
      );
    },
    h1: (props: React.ComponentProps<'h1'>) => (
      <h1
        {...props}
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          marginTop: '0.5em',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </h1>
    ),
    h2: (props: React.ComponentProps<'h2'>) => (
      <h2
        {...props}
        style={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          marginTop: '0.5em',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </h2>
    ),
    h3: (props: React.ComponentProps<'h3'>) => (
      <h3
        {...props}
        style={{
          fontSize: '1.25em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          marginTop: '0.5em',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </h3>
    ),
    h4: (props: React.ComponentProps<'h4'>) => (
      <h4
        {...props}
        style={{
          fontSize: '1.1em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          marginTop: '0.5em',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </h4>
    ),
    h5: (props: React.ComponentProps<'h5'>) => (
      <h5
        {...props}
        style={{
          fontSize: '1em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          marginTop: '0.5em',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </h5>
    ),
    h6: (props: React.ComponentProps<'h6'>) => (
      <h6
        {...props}
        style={{
          fontSize: '0.9em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          marginTop: '0.5em',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </h6>
    ),
  };

    if (modo === "somente-leitura") {
      return (
        <div className="editor-preview">
          <ReactMarkdown components={componentes}>{markdown}</ReactMarkdown>
        </div>
      );
    }

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
);

Markdown.displayName = "Markdown";

export default Markdown;