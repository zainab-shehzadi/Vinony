import AccountHeader from "../account/AccountHeader";
import PlanBadge from "./PlanBadge";

type Props = {
  planLabel: string;
};

export default function ProfileHeader({ planLabel }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-4 border-b border-border px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <AccountHeader
        title="Your Profile"
        subtitle="Please update your profile settings here"
      />

      <div className="self-start sm:self-auto">
        <PlanBadge label={planLabel} />
      </div>
    </div>
  );
}
