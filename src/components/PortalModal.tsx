import React, { useState } from 'react';
import { X, Lock, UserCheck, Info } from 'lucide-react';
import { PortalItem, SCHOOL_DATA } from '../config/schoolData';
import { validatePortalCredentials } from '../utils/validation';

interface PortalModalProps {
  portal: PortalItem | null;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ portal, onClose }) => {
  const [identifier, setIdentifier] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [errors, setErrors] = useState<{ identifier?: string; accessCode?: string }>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!portal) return null;

  const handlePortalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validatePortalCredentials({ identifier, accessCode });
    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatusMessage(null);
      return;
    }

    setErrors({});
    setStatusMessage(
      `${portal.label} authentication is currently marked "${portal.status}". Live sign-in for ${identifier} will be activated when Firebase Authentication is connected.`
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/60 p-4"
    >
      <div className="bg-[#FFFFFF] border-2 border-[#E5D5D0] rounded-2xl max-w-md w-full overflow-hidden shadow-md">
        {/* Modal Header */}
        <div className="bg-[#7A1215] text-[#FFFFFF] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {portal.id === 'staff-login' ? (
              <Lock className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
            ) : (
              <UserCheck className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
            )}
            <h2 id="portal-modal-title" className="font-display text-lg font-bold text-[#FFFFFF]">
              {portal.label}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close portal dialog"
            className="text-[#FFFFFF] hover:text-[#FBBF24] p-1 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="rounded-xl bg-[#FAF5F2] border border-[#E5D5D0] p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#8B1518] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs text-[#27272A] font-medium space-y-1 leading-relaxed">
              <p className="font-bold text-[#8B1518]">
                Status: {portal.status}
              </p>
              <p>{portal.description}</p>
            </div>
          </div>

          <form onSubmit={handlePortalSubmit} noValidate className="space-y-4">
            <div>
              <label
                htmlFor="portal-id"
                className="block text-xs font-bold text-[#18181B] mb-1.5"
              >
                {portal.id === 'staff-login' ? 'Staff ID or Official Email' : 'Parent / Guardian ID'}
              </label>
              <input
                id="portal-id"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={portal.id === 'staff-login' ? 'e.g., UFPS-STAFF-01' : 'e.g., UFPS-PAR-01'}
                className="w-full rounded-xl border-2 border-[#D6C2BC] bg-[#FFFFFF] px-3.5 py-2.5 text-sm font-medium text-[#18181B] focus:border-[#8B1518] focus:outline-none focus:ring-2 focus:ring-[#8B1518]/30"
              />
              {errors.identifier && (
                <p className="mt-1 text-xs font-bold text-[#8B1518]">{errors.identifier}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="portal-code"
                className="block text-xs font-bold text-[#18181B] mb-1.5"
              >
                Access Code / Password
              </label>
              <input
                id="portal-code"
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Enter access code"
                className="w-full rounded-xl border-2 border-[#D6C2BC] bg-[#FFFFFF] px-3.5 py-2.5 text-sm font-medium text-[#18181B] focus:border-[#8B1518] focus:outline-none focus:ring-2 focus:ring-[#8B1518]/30"
              />
              {errors.accessCode && (
                <p className="mt-1 text-xs font-bold text-[#8B1518]">{errors.accessCode}</p>
              )}
            </div>

            {statusMessage && (
              <div
                role="status"
                className="rounded-xl bg-[#FDF2F2] text-[#18181B] font-medium p-3.5 border border-[#8B1518] text-xs leading-relaxed"
              >
                {statusMessage}
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="h-10 px-4 text-xs font-bold text-[#18181B] bg-[#FAF5F2] border border-[#D6C2BC] rounded-lg hover:bg-[#E5D5D0] transition-colors duration-200 cursor-pointer"
              >
                Close
              </button>
              <button
                type="submit"
                className="h-10 px-5 text-xs font-bold text-[#FFFFFF] bg-[#8B1518] rounded-lg hover:bg-[#560B0E] transition-colors duration-200 cursor-pointer"
              >
                Check Portal Status
              </button>
            </div>
          </form>

          <p className="text-[11px] font-semibold text-[#3F3F46] text-center border-t border-[#E5D5D0] pt-3">
            {SCHOOL_DATA.schoolName} · {SCHOOL_DATA.address}
          </p>
        </div>
      </div>
    </div>
  );
};
