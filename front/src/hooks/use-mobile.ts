import * as React from "react";

// Definir a constante com um tipo explícito, se desejar, embora 'number' seja inferido.
const MOBILE_BREAKPOINT: number = 768;

/**
 * Hook personalizado para detectar se a tela está em um breakpoint móvel.
 * Retorna `true` se a largura da janela for menor que MOBILE_BREAKPOINT,
 * `false` caso contrário. Retorna `false` por padrão no servidor (SSR).
 *
 * @returns {boolean} `true` se for um dispositivo móvel, `false` caso contrário.
 */
export function useIsMobile(): boolean {
  // O estado pode ser 'boolean | undefined' inicialmente para lidar com SSR,
  // onde 'window' não está disponível.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Verifica se 'window' está disponível (execução no navegador)
    if (typeof window === "undefined") {
      // No lado do servidor (SSR), o valor inicial será `undefined`,
      // e então o `!!isMobile` retornará `false`.
      return;
    }

    const mediaQueryList = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Define o estado inicial
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Adiciona e remove o listener
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // Array de dependências vazio para rodar apenas uma vez na montagem

  // Coage 'isMobile' para um booleano, tratando 'undefined' como 'false' para SSR.
  return !!isMobile;
}