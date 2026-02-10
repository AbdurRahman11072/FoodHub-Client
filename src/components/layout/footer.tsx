"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground text-sm font-bold">
                🍱
              </div>
              <span>FoodHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover and order delicious meals from your favorite restaurants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/meals"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Browse Meals
                </Link>
              </li>
              <li>
                <Link
                  href="/providers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="font-semibold mb-4">Customer</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h3 className="font-semibold mb-4">Partner</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/provider/register"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 FoodHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
