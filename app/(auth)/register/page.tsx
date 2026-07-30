import RegisterForm from "../_components/RegisterForm";

function RegisterPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-4 py-12">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-between bg-blue-600 p-12 text-white lg:flex">
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                Welcome to <br />
                <span className="text-blue-200">GearUp</span>
              </h1>

              <p className="mt-6 max-w-md text-blue-100">
                Rent premium outdoor and sports gear from trusted providers.
                Create your account and start your next adventure today.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <h3 className="font-semibold">✔ Secure Authentication</h3>
                <p className="text-sm text-blue-100">
                  JWT + HTTP Only Cookie
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <h3 className="font-semibold">✔ Easy Booking</h3>
                <p className="text-sm text-blue-100">
                  Find and rent gear in minutes.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <h3 className="font-semibold">✔ Secure Payments</h3>
                <p className="text-sm text-blue-100">
                  Powered by Stripe.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900">
                  Create Account
                </h2>

                <p className="mt-2 text-slate-500">
                  Join GearUp and start renting premium gear.
                </p>
              </div>

              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;