import { demoContent } from '../../data/demoContent';

type DemoBadgeProps = {
  label?: string;
};

export default function DemoBadge({ label = demoContent.badge }: DemoBadgeProps) {
  return <span className="demo-badge">{label}</span>;
}