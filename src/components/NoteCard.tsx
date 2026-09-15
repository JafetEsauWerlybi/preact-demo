import type { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

const PRIORITY_LABEL: Record<Note['priority'], string> = {
  1: 'Baja',
  2: 'Media',
  3: 'Alta',
};

export function NoteCard({ note, onDelete }: NoteCardProps) {
  const date = new Date(note.createdAt).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article class="note-card">
      <header class="note-card__header">
        <h3 class="note-card__title">{note.title}</h3>
        <span class={`note-card__priority note-card__priority--${note.priority}`}>
          {PRIORITY_LABEL[note.priority]}
        </span>
        <button
          type="button"
          class="note-card__delete"
          onClick={() => onDelete(note.id)}
          aria-label={`Borrar nota ${note.title}`}
        >
          ×
        </button>
      </header>
      {note.content && <p class="note-card__content">{note.content}</p>}
      <time class="note-card__date">{date}</time>
    </article>
  );
}
