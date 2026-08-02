import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  CalendarDays,
  CheckCircle,
  LayoutDashboard,
  Mail,
  Package,
  ShieldCheck,
  ShoppingBag,
  Star,
  User,
} from "lucide-react";

import { getMeAction } from "@/app/(auth)/_actions/getMeaction";
import Navbar from "@/app/_components/navbar/Navbar";

import ProfileEditForm from "./_components/ProfileEditForm";

const ProfilePage = async () => {
  const user = await getMeAction();

  if (!user) {
    redirect("/login");
  }

  const userInitial =
    user.name.charAt(0).toUpperCase();

  const joinedDate = new Date(
    user.createdAt,
  ).toLocaleDateString();

  const updatedDate = new Date(
    user.updatedAt,
  ).toLocaleDateString();

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] bg-slate-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="h-fit overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:sticky lg:top-24">
              <div className="bg-blue-600 px-6 py-9 text-center text-white">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                  {user.profileImage ? (
                    <Image
                      src={user.profileImage}
                      alt={user.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-3xl font-bold text-blue-600">
                      {userInitial}
                    </div>
                  )}
                </div>

                <h1 className="mt-4 text-2xl font-bold">
                  {user.name}
                </h1>

                <p className="mt-1 break-all text-sm text-blue-100">
                  {user.email}
                </p>

                <span className="mt-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  {user.role}
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <ShieldCheck
                    size={19}
                    className="shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-gray-500">
                      Account Status
                    </p>

                    <p className="font-semibold text-gray-900">
                      {user.status}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <CalendarDays
                    size={19}
                    className="shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-gray-500">
                      Member Since
                    </p>

                    <p className="font-semibold text-gray-900">
                      {joinedDate}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${user.role.toLowerCase()}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <LayoutDashboard size={18} />
                  Open Dashboard
                </Link>
              </div>
            </aside>

            <div className="space-y-6">
              <section className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <Package
                    size={23}
                    className="text-blue-600"
                  />

                  <p className="mt-4 text-2xl font-bold text-gray-900">
                    {user.gears?.length || 0}
                  </p>

                  <p className="text-sm text-gray-500">
                    Gears
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <ShoppingBag
                    size={23}
                    className="text-blue-600"
                  />

                  <p className="mt-4 text-2xl font-bold text-gray-900">
                    {user.rentals?.length || 0}
                  </p>

                  <p className="text-sm text-gray-500">
                    Rentals
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <Star
                    size={23}
                    className="text-blue-600"
                  />

                  <p className="mt-4 text-2xl font-bold text-gray-900">
                    {user.reviews?.length || 0}
                  </p>

                  <p className="text-sm text-gray-500">
                    Reviews
                  </p>
                </div>
              </section>

              <ProfileEditForm user={user} />

              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-lg font-bold text-gray-900">
                  Account Details
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <User
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">
                        User ID
                      </p>

                      <p className="truncate text-sm font-semibold text-gray-900">
                        {user.id}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <Mail
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">
                        Email Address
                      </p>

                      <p className="truncate text-sm font-semibold text-gray-900">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <ShieldCheck
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-xs text-gray-500">
                        Account Role
                      </p>

                      <p className="text-sm font-semibold text-gray-900">
                        {user.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <CheckCircle
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-xs text-gray-500">
                        Last Updated
                      </p>

                      <p className="text-sm font-semibold text-gray-900">
                        {updatedDate}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;