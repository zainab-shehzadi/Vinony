import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import AuthShell from "../../components/auth/AuthShell";
import AuthCard from "../../components/auth/AuthCard";
import PasswordField from "../../components/auth/PasswordField";

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  keepSignedIn: z.boolean().default(false),
});

type FormValues = z.infer<typeof schema>;

export default function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    // resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      keepSignedIn: true,
    },
    mode: "onSubmit",
  });

  const keepSignedIn = watch("keepSignedIn");

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    console.log("SignIn values:", values);
    navigate("/");
  };

  const onGoogle = async () => {
    console.log("Google login");
  };

  return (
    <AuthShell>
      <AuthCard title="Sign In">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label className="auth-label text-sm md:text-base" htmlFor="email">
              Email Address
            </Label>

            <Input
              id="email"
              autoComplete="email"
              placeholder="Enter your email"
              className={`auth-input ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "placeholder-text-sm"
                }`}
              {...register("email")}
            />

            {errors.email?.message ? (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="auth-label text-sm md:text-base" htmlFor="password">
                Password
              </Label>

              <Link to="/forgot-password" className="auth-link text-sm md:text-base">
                Forgot Password
              </Link>
            </div>

            <PasswordField
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          {/* Keep signed in */}
          <div className="flex items-center gap-2 lg:pt-1">
            <Checkbox
              id="keepSignedIn"
              checked={keepSignedIn}
              onCheckedChange={(v) => {
                const next = v === true;
                setValue("keepSignedIn", next, {
                  shouldDirty: true,
                  shouldTouch: true,
                  shouldValidate: true,
                });
              }}
            />
            <Label htmlFor="keepSignedIn" className="text-sm md:text-base leading-5 text-gray-700 dark:text-white">
              Keep me signed in
            </Label>
          </div>

          <Button
            type="submit"
            className="auth-primary-btn h-10 md:h-12 w-full text-base font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
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

          <div className="md:pt-2 text-center text-sm md:text-lg text-foreground">
            Don&apos;t have an Account?{" "}
            <Link to="/register" className="auth-link text-primary">
              Sign up here
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
