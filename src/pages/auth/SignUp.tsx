import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import PasswordField from "@/components/auth/PasswordField";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const schema = z
  .object({
    email: z.string().trim().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    acceptTerms: z.boolean().refine((v) => v === true, "You must accept terms"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof schema>;

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: true,
    },
  });

  const acceptTerms = watch("acceptTerms");
  const onGoogle = async () => {
    console.log("Google login");
  };
  const onSubmit = async (values: FormValues) => {
    console.log(values);

    navigate("/login");
  };

  return (
    <AuthShell>
      <AuthCard title="Sign Up">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label className="auth-label text-sm md:text-base" htmlFor="email">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              className={`auth-input placeholder:text-sm ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
              autoComplete="email"
              {...register("email")}
            />
            {errors.email?.message ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
          </div>

          <div className="space-y-1">
            <Label className="auth-label text-sm md:text-base" htmlFor="password">
              Password
            </Label>
            <PasswordField
              id="password"
              placeholder="Create a password"
              autoComplete="new-password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <div className="space-y-1">
            <Label className="auth-label text-sm md:text-base" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <PasswordField
              id="confirmPassword"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className="flex items-start gap-2 pt-2">
            <Checkbox
              id="acceptTerms"
              checked={!!acceptTerms}
              onCheckedChange={(v) => setValue("acceptTerms", Boolean(v))}
              className="h-5 w-5 shrink-0 mt-[8px]"
            />
            <Label htmlFor="acceptTerms" className="text-sm md:text-baseleading-5">
              By Creating an Account, I accept the{" "}
              <a className="auth-link text-primary" href="/terms-condition">
                Terms and Conditions
              </a>{" "}
              and agree with{" "} text-foreground 
              <a className="auth-link text-primary" href="/privacy-policy">
                Privacy Policies
              </a>
              .
            </Label>
          </div>
          {errors.acceptTerms?.message ? <p className="text-xs text-red-600">{errors.acceptTerms.message}</p> : null}

          <Button type="submit" className="auth-primary-btn h-10 md:h-12 w-full text-base font-semibold" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Sign Up"}
          </Button>
          {/* Divider */}
          <div className="flex items-center gap-3 pt-1">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={onGoogle}
            className="h-10 md:h-12 w-full rounded-xl border border-border bg-[#F4F5FA99] dark:bg-card text-base font-semibold hover:bg-gray-50 hover:text-foreground"
          >
            <img
              src="/google.svg"
              alt="Google"
              className="mr-3 h-5 w-5"
              loading="lazy"
            />
            Continue with Google
          </Button>
          <div className="text-center text-sm md:text-lg md:pt-2">
            Already have an account?{" "}
            <Link to="/login" className="auth-link text-primary">
              Sign In here
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
