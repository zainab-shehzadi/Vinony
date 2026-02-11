import { NOTIFICATIONS } from "@/constants/settings";
import { NotificationSettings } from "@/types/setting";

type Props = {
  value: NotificationSettings;
  onChange: (next: NotificationSettings) => void;
};

export default function NotificationsFieldset({ value, onChange }: Props) {
  return (
    <div className="space-y-6">
      {NOTIFICATIONS.map((n) => (
        <div
          key={n.id}
          className="flex items-start gap-3 w-full overflow-hidden"
        >
          <div className="flex-shrink-0">
            <input
              type="checkbox"
              checked={value[n.id]}
              className="accent-primary"
              onChange={(v) => onChange({ ...value, [n.id]: Boolean(v) })}
            />
          </div>
          <div>
            <p className="text-sm lg:text-[16px] font-semibold text-foreground">
              {n.title}
            </p>
            <p className="mt-1 text-sm lg:text-[16px] text-[#475569] dark:text-accent">
              {n.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
