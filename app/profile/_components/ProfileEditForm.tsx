"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  useState,
  type SubmitEvent,
} from "react";
import { Pencil, Save, X } from "lucide-react";
import { toast } from "sonner";

import { updateProfileAction } from "@/app/(auth)/_actions/updateProfileAction";
import type { IUser } from "@/types/user";

type ProfileEditFormProps = {
  user: IUser;
};

const ProfileEditForm = ({
  user,
}: ProfileEditFormProps) => {
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(
    user.phone || "",
  );
  const [address, setAddress] = useState(
    user.address || "",
  );
  const [profileImage, setProfileImage] =
    useState(user.profileImage || "");

  const resetForm = () => {
    setName(user.name);
    setPhone(user.phone || "");
    setAddress(user.address || "");
    setProfileImage(user.profileImage || "");
    setEditing(false);
  };

  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setLoading(true);

    const result = await updateProfileAction({
      name,
      phone,
      address,
      profileImage,
    });

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    setEditing(false);
    router.refresh();
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Update your profile information
          </p>
        </div>

        {!editing && (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
          >
            <Pencil size={17} />
            Edit
          </button>
        )}
      </div>

      {!editing ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-gray-500">
              Full Name
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {user.name}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-gray-500">
              Phone Number
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {user.phone || "Not provided"}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
            <p className="text-xs text-gray-500">
              Address
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {user.address || "Not provided"}
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-50 p-5 sm:flex-row">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-blue-100">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt={name || "Profile"}
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-2xl font-bold text-blue-600">
                  {name.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </div>

            <div className="w-full">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Profile Image URL
              </label>

              <input
                type="url"
                value={profileImage}
                onChange={(event) =>
                  setProfileImage(
                    event.target.value,
                  )
                }
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Address
            </label>

            <textarea
              value={address}
              onChange={(event) =>
                setAddress(event.target.value)
              }
              rows={3}
              placeholder="Enter your address"
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={resetForm}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <X size={18} />
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />

              {loading
                ? "Saving..."
                : "Save Changes"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileEditForm;