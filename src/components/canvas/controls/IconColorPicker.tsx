import React, { useState } from 'react';
import { Palette, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconColorPickerProps {
  /** Current effective icon color (hex). */
  value: string;
  onChange: (color: string) => void;
  onReset?: () => void;
  /** True when a user override is active (enables the reset affordance). */
  isOverridden?: boolean;
  className?: string;
}

// A few on-brand / neutral presets for quick selection.
const PRESETS = ['#a3a3a3', '#ffffff', '#525252', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

/**
 * Central control for the color of vector (lucide) UI icons. Writes through
 * useTheme().setIconColor, which persists to localStorage and updates the
 * `--color-icon` CSS variable that all icons read from.
 */
export function IconColorPicker({ value, onChange, onReset, isOverridden, className }: IconColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('relative pointer-events-auto', className)}>
      <button
        onClick={() => setIsOpen((o) => !o)}
        title="Icon color"
        className="p-3 rounded-xl shadow-lg border transition-all duration-200 active:scale-95 flex items-center justify-center"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <Palette className="w-5 h-5" style={{ color: 'var(--color-icon)' }} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to dismiss */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          <div
            className="absolute bottom-full right-0 mb-2 z-50 p-3 rounded-xl shadow-2xl border w-56 animate-in fade-in zoom-in-95 duration-150"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div
              className="text-[10px] font-bold uppercase tracking-wider mb-2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Icon Color
            </div>

            {/* Presets */}
            <div className="grid grid-cols-8 gap-1.5 mb-3">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => onChange(preset)}
                  title={preset}
                  className="w-5 h-5 rounded-md border transition-transform hover:scale-110"
                  style={{
                    backgroundColor: preset,
                    borderColor:
                      preset.toLowerCase() === value.toLowerCase() ? 'var(--color-primary)' : 'var(--color-border)',
                    outline: preset.toLowerCase() === value.toLowerCase() ? '2px solid var(--color-primary)' : 'none',
                    outlineOffset: '1px',
                  }}
                />
              ))}
            </div>

            {/* Custom color + reset */}
            <div className="flex items-center gap-2">
              <label
                className="flex items-center gap-2 flex-1 px-2 py-1.5 rounded-lg border cursor-pointer text-xs"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                <span
                  className="w-4 h-4 rounded border"
                  style={{ backgroundColor: value, borderColor: 'var(--color-border)' }}
                />
                <span className="font-mono">{value}</span>
                <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="sr-only" />
              </label>

              {onReset && (
                <button
                  onClick={onReset}
                  disabled={!isOverridden}
                  title="Reset to theme default"
                  className="p-1.5 rounded-lg border transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
