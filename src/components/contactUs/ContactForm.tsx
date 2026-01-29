import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { contactSchema, type ContactSchemaValues } from "../validations/contact.schema";

type Props = {
  onSubmit: (values: ContactSchemaValues) => Promise<void> | void;
};

const labelCls =
  "text-sm font-medium text-gray-800 dark:text-slate-300 md:text-base lg:text-lg";

const inputCls =
  "w-full border-0 border-b border-slate-300/70 dark:border-slate-600/70 " +
  "bg-transparent px-0 py-2 text-sm " +
  "text-gray-900 dark:text-slate-100 " +
  "placeholder:text-slate-500 dark:placeholder:text-slate-400 " +
  "focus:outline-none focus:ring-0 " +
  "focus:border-gray-900 dark:focus:border-slate-200 " +
  "md:text-base lg:text-lg";

const textareaCls =
  "w-full resize-none border-0 border-b border-slate-300/70 dark:border-slate-600/70 " +
  "bg-transparent px-0 py-2 text-sm " +
  "text-gray-900 dark:text-slate-100 " +
  "placeholder:text-slate-500 dark:placeholder:text-slate-400 " +
  "focus:outline-none focus:ring-0 " +
  "focus:border-gray-900 dark:focus:border-slate-200 " +
  "md:text-base lg:text-lg";


export default function ContactForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onSubmit",
  });

  const submit: SubmitHandler<ContactSchemaValues> = async (values) => {
    await onSubmit(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="p-4 md:p-6 md:p-10">
      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 sm:gap-y-10 md:gap-x-12 md:gap-y-14">
        {/* First Name */}
        <div>
          <label className={labelCls} htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            placeholder="First Name Here"
            className={`${inputCls} ${errors.firstName ? "border-red-500 focus:border-red-500" : ""}`}
            {...register("firstName")}
          />
          {errors.firstName?.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
          ) : null}
        </div>

        {/* Last Name */}
        <div>
          <label className={labelCls} htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            placeholder="Last Name Here"
            className={`${inputCls} ${errors.lastName ? "border-red-500 focus:border-red-500" : ""}`}
            {...register("lastName")}
          />
          {errors.lastName?.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="Email Here"
            inputMode="email"
            autoComplete="email"
            className={`${inputCls} ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
            {...register("email")}
          />
          {errors.email?.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label className={labelCls} htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            placeholder="+0 123 456 789"
            inputMode="numeric"
            autoComplete="tel"
            className={`${inputCls} ${errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
            {...register("phone", {
              setValueAs: (v) => String(v ?? "").replace(/\D/g, ""),
              validate: (v: any) => (/^\d*$/.test(v) ? true : "Only numbers are allowed"),
            })}
            onInput={(e) => {
              const el = e.currentTarget;
              el.value = el.value.replace(/\D/g, "");
            }}
          />

          {errors.phone?.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
        {/* Message */}
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message.."
            rows={3}
            className={`${textareaCls} ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
            {...register("message")}
          />
          {errors.message?.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
          ) : null}
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 flex sm:justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-lg btn-gradient px-6 text-sm font-semibold text-white sm:h-14 sm:w-auto sm:min-w-[170px] sm:px-12 sm:text-base md:text-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
