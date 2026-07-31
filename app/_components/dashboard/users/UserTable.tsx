// import UserTableRow from "./UserTableRow";

// interface IUser {
//   id: string;
//   name: string;
//   email: string;
//   role: "ADMIN" | "CUSTOMER" | "PROVIDER";
//   status: "ACTIVE" | "SUSPENDED";
//   phone: string | null;
//   profileImage: string | null;
//   address: string | null;
//   createdAt: string;
//   updatedAt: string;
// }

// interface UserTableProps {
//   users: IUser[];
// }

// export default function UserTable({ users }: UserTableProps) {
//   return (
//     <div className="overflow-x-auto rounded-xl border bg-white">
//       <table className="min-w-full">
//         <thead className="border-b bg-slate-50">
//           <tr>
//             <th className="px-6 py-4 text-left">Name</th>
//             <th className="px-6 py-4 text-left">Email</th>
//             <th className="px-6 py-4 text-left">Role</th>
//             <th className="px-6 py-4 text-left">Status</th>
//             <th className="px-6 py-4 text-right">Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map((user) => (
//             <UserTableRow key={user.id} user={user} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import UserTableRow from "./UserTableRow";

interface IUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  phone: string | null;
  profileImage: string | null;
  address: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UserTableProps {
  users: IUser[];
}
export default function UserTable({
  users,
}: UserTableProps) {
  if (!users.length) {
    return (
      <div className="rounded-2xl border bg-white py-20 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-gray-700">
          No Users Found
        </h3>

        <p className="mt-2 text-gray-500">
          There are no registered users yet.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ================= Desktop Table ================= */}

      <div className="hidden overflow-hidden rounded-2xl border bg-white shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="min-w-full">

            {/* Table Head */}

            <thead className="border-b bg-gray-50">
              <tr className="text-sm uppercase tracking-wide text-gray-500">

                <th className="px-6 py-4 text-left">
                  User
                </th>

                <th className="px-6 py-4 text-left">
                  Role
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-left">
                  Joined
                </th>

                <th className="px-6 py-4 text-right">
                  Action
                </th>

              </tr>
            </thead>

            {/* Table Body */}

            <tbody>
              {users.map((user) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                />
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* ================= Mobile Cards ================= */}

      <div className="space-y-4 lg:hidden">
        {users.map((user) => (
          <UserTableRow
            key={user.id}
            user={user}
            mobile
          />
        ))}
      </div>
    </>
  );
}