import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import HealthMonitorStudy from "../../features/caseStudies/HealthMonitorStudy";
import MoneyBoysStudy from "../../features/caseStudies/MoneyBoysStudy";

export default function CaseStudyDialog({ open, caseStudy, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.classList.toggle("dialog-open", open);
    return () => document.body.classList.remove("dialog-open");
  }, [open]);
  return (
    <dialog
      ref={dialogRef}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(76rem,calc(100%-2rem))] max-w-none overflow-y-auto rounded-2xl border border-[var(--border)] bg-page p-0 text-ink shadow-2xl backdrop:bg-slate-950/75"
      aria-labelledby="case-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="relative">
        <button
          className="sticky top-3 right-3 z-10 float-right mr-3 grid size-10 place-items-center rounded-full bg-slate-950 text-white shadow-xl"
          type="button"
          onClick={onClose}
          aria-label="Close case study"
        >
          <Icon name="x" className="size-5" />
        </button>
        {caseStudy === "health-monitor" ? (
          <HealthMonitorStudy />
        ) : (
          <MoneyBoysStudy />
        )}
      </div>
    </dialog>
  );
}
