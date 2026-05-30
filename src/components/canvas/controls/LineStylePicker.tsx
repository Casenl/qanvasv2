import React, { useState } from 'react';
import { Minus } from 'lucide-react';

interface LineStylePickerProps {
  value: 'solid' | 'dashed' | 'dotted';
  onChange: (style: 'solid' | 'dashed' | 'dotted') => void;
}

const LINE_STYLES: Array<{ value: 'solid' | 'dashed' | 'dotted'; label: string }> = [
  { value: 'solid', label: 'Solid' },
  { value: 'dashed', label: 'Dashed' },
  { value: 'dotted', label: 'Dotted' },
];

export function LineStylePicker({ value, onChange }: LineStylePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Line Style"
        className="p-2 rounded-lg transition-all duration-200"
        style={{
          backgroundColor: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: 'var(--color-icon)' }}>
          <line
            x1="2"
            y1="10"
            x2="18"
            y2="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={value === 'dashed' ? '4,2' : value === 'dotted' ? '1,2' : 'none'}
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Style options */}
          <div
            className="absolute top-full mt-2 p-2 rounded-lg shadow-2xl border backdrop-blur-xl z-50 flex flex-col gap-1"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              minWidth: '120px',
            }}
          >
            {LINE_STYLES.map((style) => (
              <button
                key={style.value}
                onClick={() => {
                  onChange(style.value);
                  setIsOpen(false);
                }}
                className="px-3 py-2 rounded transition-all text-left flex items-center gap-2"
                style={{
                  backgroundColor: value === style.value ? 'var(--color-background-secondary)' : 'transparent',
                  color: 'var(--color-text)',
                }}
                onMouseEnter={(e) => {
                  if (value !== style.value) {
                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== style.value) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <svg width="40" height="12" viewBox="0 0 40 12" style={{ color: 'var(--color-icon)' }}>
                  <line
                    x1="2"
                    y1="6"
                    x2="38"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={style.value === 'dashed' ? '4,2' : style.value === 'dotted' ? '1,2' : 'none'}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm">{style.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
