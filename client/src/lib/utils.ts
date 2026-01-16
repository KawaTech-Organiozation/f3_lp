import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retorna uma foto de sócia baseada em rotação diária
 * Garante que a mesma foto seja exibida durante todo o dia
 * @returns Caminho relativo para a imagem da sócia
 */
export function getDailySociaImage(): string {
  const images = ['socia_1.jpeg', 'socia_2.jpeg', 'socia_3.jpeg'];

  // Calcular dia do ano (1-365)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Selecionar imagem baseada no dia
  const index = dayOfYear % images.length;
  return `/images/${images[index]}`;
}
