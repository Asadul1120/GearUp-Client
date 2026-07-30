import LoginForm from "../_components/LoginForm";


const LoginPage = () => {

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-10">

      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Login Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-2xl backdrop-blur-md">

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg">
            G
          </div>
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue to your account.
          </p>
        </div>

        <LoginForm />

      </div>
    </section>
  );
};

export default LoginPage;