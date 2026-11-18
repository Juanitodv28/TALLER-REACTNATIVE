
export type BotonAlerta = {
  texto: string;
  estilo?: 'normal' | 'cancelar' | 'principal';
  onPress?: () => void;
};

export type DatosAlerta = {
  titulo: string;
  mensaje: string;
  botones: BotonAlerta[];
};

type OyenteAlerta = (datos: DatosAlerta | null) => void;

let oyente: OyenteAlerta | null = null;

export function registrarOyente(
  callback: OyenteAlerta | null
) {
  oyente = callback;
}

export function mostrarAlerta(
  titulo: string,
  mensaje: string,
  botones: BotonAlerta[] = [
    {
      texto: 'Entendido',
      estilo: 'principal',
    },
    { texto: 'Cerrar', estilo: 'cancelar' },
  ]
) {
  oyente?.({
    titulo,
    mensaje,
    botones,
  });
}
