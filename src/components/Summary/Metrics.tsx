import { useTranslation } from 'react-i18next';

interface MetricsProps {
  totalNeeded: number;
  totalHave: number;
  totalMissing: number;
}

export function Metrics({
  totalNeeded,
  totalHave,
  totalMissing,
}: MetricsProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-2 max-[700px]:grid-cols-3">
      <div className="rounded-xl py-2 px-2.5 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),#020617)] border border-slate-700/90">
        <div className="text-[0.7rem] uppercase tracking-[0.16em] text-(--text-muted) mb-[3px]">{t('metrics.totalParts')}</div>
        <div className="text-[1.15rem] font-semibold">{totalNeeded}</div>
      </div>
      <div className="rounded-xl py-2 px-[10px] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),#020617)] border border-green-500/70">
        <div className="text-[0.7rem] uppercase tracking-[0.16em] text-(--text-muted) mb-[3px]">{t('metrics.have')}</div>
        <div className="text-[1.15rem] font-semibold">{totalHave}</div>
      </div>
      <div className="rounded-xl py-2 px-[10px] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),#020617)] border border-red-400/60">
        <div className="text-[0.7rem] uppercase tracking-[0.16em] text-(--text-muted) mb-[3px]">{t('metrics.missing')}</div>
        <div className="text-[1.15rem] font-semibold">{totalMissing}</div>
      </div>
    </div>
  );
}
