interface NotesPillsProps {
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  variant?: 'full' | 'compact';
}

export default function NotesPills({ notes, variant = 'full' }: NotesPillsProps) {
  if (variant === 'compact') {
    const allNotes = [...notes.top, ...notes.middle, ...notes.base];
    return (
      <div className="flex flex-wrap gap-1.5">
        {allNotes.slice(0, 6).map((note, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
          >
            {note}
          </span>
        ))}
        {allNotes.length > 6 && (
          <span className="inline-block px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
            +{allNotes.length - 6} more
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Top Notes */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          Top Notes
        </h4>
        <div className="flex flex-wrap gap-2">
          {notes.top.map((note, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-full border border-amber-200"
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Middle Notes */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
          Middle Notes
        </h4>
        <div className="flex flex-wrap gap-2">
          {notes.middle.map((note, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-rose-50 text-rose-700 text-sm rounded-full border border-rose-200"
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Base Notes */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Base Notes
        </h4>
        <div className="flex flex-wrap gap-2">
          {notes.base.map((note, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-200"
            >
              {note}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
