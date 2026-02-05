import type { CountryCode } from "@/types/setting";
import { COUNTRIES } from "@/constants/settings";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,  
} from "@/components/ui/select";

type Props = {
  country: CountryCode;
  phone: string;
  onCountryChange: (c: CountryCode) => void;
  onPhoneChange: (v: string) => void;
  className?: string;
};

export default function PhoneField({
  country,
  phone,
  onCountryChange,
  onPhoneChange,
  className,
}: Props) {
  const selected = COUNTRIES.find((c) => c.code === country);

  return (
    <div
      className={cn(
        "flex w-full items-center overflow-hidden rounded-md border border-border bg-background",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        className
      )}
    >
      {/* Left: Country select (no border, inside the same box) */}
      <Select value={country} onValueChange={(v) => onCountryChange(v as CountryCode)}>
        <SelectTrigger
          className={cn(
            "h-11 w-[px] rounded-none border-0 bg-transparent px-3",
            "shadow-none focus:ring-0 focus:ring-offset-0",
            "justify-center gap-2"
          )}
        >

          <span className="text-base leading-none">{selected?.flag}</span>
        </SelectTrigger>


        <SelectContent align="start">
          {COUNTRIES.map((c) => (
            <SelectItem key={c.code} value={c.code} textValue={c.label}>
              <span className="flex w-full items-center gap-2">
                <span>{c.flag}</span>
                <span className="text-sm">{c.label}</span>
                <span className="ml-auto text-xs text-muted-foreground">{c.dialCode}</span>
              </span>
            </SelectItem>

          ))}
        </SelectContent>
      </Select>

      <div className="h-11 w-px bg-border" />

      <Input
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        placeholder="(158) 008–9987"
        inputMode="tel"
        className={cn(
          "h-11 flex-1  border-0 bg-transparent px-4",
          "shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        )}
      />
    </div>
  );
}
