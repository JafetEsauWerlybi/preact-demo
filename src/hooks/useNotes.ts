import { useEffect, useState } from 'preact/hooks';
import type { Note } from '../types';

const STORAGE_KEY = 'notas-app:notes';

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Note[]) : [];
  } catch {
    // localStorage puede no estar disponible (modo privado) o el valor guardado
    // puede estar corrupto — en cualquier caso, arrancamos con una lista vacía.
    return [];
  }
}

/**
 * Guarda y recupera las notas en localStorage. Es el único lugar del proyecto
 * que sabe cómo se persisten los datos — si un día cambiamos a otra fuente
 * (una API, IndexedDB), solo se toca este archivo.
 */
export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(loadNotes);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {
      // Si falla el guardado (cupo lleno, modo privado), lo ignoramos a
      // propósito: es mejor que la app siga funcionando en memoria.
    }
  }, [notes]);

  function addNote(title: string, content: string) {
    const note: Note = {
      id: crypto.randomUUID(),
      title: title.trim() || 'Sin título',
      content: content.trim(),
      createdAt: Date.now(),
    };
    setNotes((prev) => [note, ...prev]);
  }

  function deleteNote(id: string) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  return { notes, addNote, deleteNote };
}
