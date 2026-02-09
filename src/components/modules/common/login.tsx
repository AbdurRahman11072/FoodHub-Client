"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 py-12">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your FoodHub account
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-10"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full mt-6">
                Sign In
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full mt-1"
                onClick={() => signIn()}
              >
                Countinu with google
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>

              {/* Sign up link */}
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </Card>

          {/* Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>
              Demo credentials email: admin@gmail.com pass:admin123@ email:
              provider@gmail.com pass:provider123@
            </p>
            <p className="text-xs">Your data is encrypted and secure</p>
          </div>
        </div>
      </div>
    </main>
  );
}
