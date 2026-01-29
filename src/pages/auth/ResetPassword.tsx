import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AuthShell from "../../components/auth/AuthShell";
import AuthCard from "../../components/auth/AuthCard";
import PasswordField from "../../components/auth/PasswordField";

const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof schema>;

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirmPassword: "" },
  });
  const navigate = useNavigate();

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthShell>
      <AuthCard
        title="Reset Password"
        subtitle="Enter your new password below and confirm it to reset your password."
      >

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label className="auth-label text-sm md:text-base" htmlFor="password">
              Password
            </Label>
            <PasswordField
              id="password"
              placeholder="Enter new password" 
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
              placeholder="Re-enter new password"
              autoComplete="new-password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>

          <Button type="submit" onClick={() => navigate("/login")} className="auth-primary-btn h-10 md:h-12 w-full text-sm md:text-base font-semibold" disabled={isSubmitting}>
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>

          <div className="text-center text-sm md:text-lg text-accent md:pt-2">
            Remember Password?{" "}
            <Link to="/login" className="auth-link text-secondary font-medium">
              Sign In
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
