import './app.css';
import { useNotes } from './hooks/useNotes';
import { NoteForm } from './components/NoteForm';
import { NoteList } from './components/NoteList';

export function App() {
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <main class="app">
      <header class="app__header">
        <h1>Notas</h1>
        <p class="app__subtitle">
          {notes.length} nota{notes.length === 1 ? '' : 's'} guardada{notes.length === 1 ? '' : 's'} en este
          navegador
        </p>
      </header>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </main>
  );
}
