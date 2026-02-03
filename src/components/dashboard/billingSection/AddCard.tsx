import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AccountHeader from "@/components/settings/account/AccountHeader";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { addCardSchema } from "@/validation/addCardSchema";

export default function AddCard({setCardActive}: {setCardActive: (value: boolean) => void}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    // These are form rules 
    resolver: yupResolver(addCardSchema),
    // These are default values of form
    defaultValues: {
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
      isDefault: false,
    },
  });

  const onSubmit = (data: any) => {
    try {
        setTimeout(() => {
            alert("Card added successfully!");
        }, 3000);
        console.log("Validated Form Data:", data);
    } catch{
        alert("something went wrong")
    }
  };

  return (
    <div className="w-full mx-auto p-4 md:p-8 bg-background my-3">
      <AccountHeader 
        title="Add card" 
        subtitle="Please enter your payment details to add a new card."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 border-t border-border">
        
        {/* Card Number */}
        <FormRow label="Card Number" error={errors.cardNumber?.message}>
          <Input 
            {...register("cardNumber")}
            placeholder="0000 0000 0000 0000" 
            className={`h-11 ${errors.cardNumber ? "border-destructive focus-visible:ring-destructive" : "border border-border"}`}
          />
        </FormRow>

        {/* Cardholder Name */}
        <FormRow label="Cardholder Name" error={errors.cardHolder?.message}>
          <Input 
            {...register("cardHolder")}
            placeholder="Name on credit card" 
            className={`h-11 ${errors.cardHolder ? "border-destructive focus-visible:ring-destructive" : "border border-border"}`}
          />
        </FormRow>

        {/* Expiry Date */}
        <FormRow label="Expiry Date" error={errors.expiryDate?.message}>
          <Input 
            {...register("expiryDate")}
            placeholder="MM/YY" 
            className={`h-11 ${errors.expiryDate ? "border-destructive focus-visible:ring-destructive" : "border border-border"}`}
          />
        </FormRow>

        {/* CVV */}
        <FormRow label="CVV" error={errors.cvv?.message}>
          <Input 
            {...register("cvv")}
            placeholder="CVV" 
            className={`h-11 ${errors.cvv ? "border-destructive focus-visible:ring-destructive" : "border border-border"}`}
          />
        </FormRow>

        {/* Default Selection */}
        <div className="flex items-center py-8 gap-3 border-b border-border">
          <Checkbox 
            id="isDefault"
            checked={watch("isDefault")}
            onCheckedChange={(checked) => setValue("isDefault", !!checked)}
          />
          <label htmlFor="isDefault" className="text-sm md:text-base cursor-pointer select-none font-medium">
            Set this card as my default payment method
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-8">
          <Button 
            type="button"
            variant="ghost" 
            onClick={()=> {
                setTimeout(() => {
                    setCardActive(false)
                }, 1000);
            }}
            className="w-full sm:w-auto h-11 px-8 rounded-xl order-2 sm:order-1 bg-accent/10 hover:bg-accent/20 hover:text-foreground"
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-11 px-10 rounded-xl btn-gradient shadow-md hover:opacity-90 transition-all order-1 sm:order-2"
          >
            {isSubmitting ? "Saving..." : "Save Card"}
          </Button>
        </div>
      </form>
    </div>
  );
}

// Reusable Row Component for cleaner JSX
function FormRow({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-start py-6 border-b border-border gap-2 md:gap-4">
      <label className="text-sm md:text-base font-bold pt-2">{label}</label>
      <div className="md:col-span-2 max-w-sm w-full">
        {children}
        {error && <p className="text-xs text-destructive mt-1 font-medium">{error}</p>}
      </div>
    </div>
  );
}