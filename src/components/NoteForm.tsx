import { useState } from 'preact/hooks';
import type { JSX } from 'preact';

interface NoteFormProps {
  onAdd: (title: string, content: string) => void;
}

export function NoteForm({ onAdd }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(event: JSX.TargetedEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onAdd(title, content);
    setTitle('');
    setContent('');
  }

  return (
    <form class="note-form" onSubmit={handleSubmit}>
      <input
        class="note-form__title"
        type="text"
        placeholder="Título"
        value={title}
        onInput={(e) => setTitle((e.target as HTMLInputElement).value)}
      />
      <textarea
        class="note-form__content"
        placeholder="Escribe tu nota..."
        rows={3}
        value={content}
        onInput={(e) => setContent((e.target as HTMLTextAreaElement).value)}
      />
      <button type="submit" class="note-form__submit">
        Agregar nota
      </button>
    </form>
  );
}
