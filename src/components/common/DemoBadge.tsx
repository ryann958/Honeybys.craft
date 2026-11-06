import { demoContent } from '../../data/demoContent';

type DemoBadgeProps = {
  label?: string;
};

export default function DemoBadge({ label = demoContent.badge }: DemoBadgeProps) {
  if (!label) return null;
  return <span className="demo-badge">{label}</span>;
}