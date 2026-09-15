import { useState } from "preact/hooks";
import type { JSX } from "preact";
import type { NotePriority } from "../types";

interface NoteFormProps {
  onAdd: (title: string, content: string, priority: NotePriority) => void;
}

export function NoteForm({ onAdd }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState<NotePriority>(2);

  function handleSubmit(event: JSX.TargetedEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onAdd(title, content, priority);
    setTitle("");
    setContent("");
    setPriority(2);
  }

  return (
    <form class="note-form" onSubmit={handleSubmit}>
      <span>Título:</span>
      <input
        class="note-form__title"
        type="text"
        placeholder="Título"
        value={title}
        onInput={(e) => setTitle((e.target as HTMLInputElement).value)}
      />
      <span>Prioridaad:</span>
      <textarea
        class="note-form_content"
        placeholder="Escribe tu nota..."
        rows={3}
        value={content}
        onInput={(e) => setContent((e.target as HTMLTextAreaElement).value)}
      />
      <span>Conse3tenido:</span>

      <select
        class="note-form__priority"
        value={priority}
        onChange={(e) =>
          setPriority(
            Number((e.target as HTMLSelectElement).value) as NotePriority,
          )
        }
      >
        <option value={1}>Baja</option>
        <option value={2}>Media</option>
        <option value={3}>Alta</option>
      </select>
      <button type="submit" class="note-form__submit">
        Agregar nota
      </button>
    </form>
  );
}
