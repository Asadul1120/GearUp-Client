import Image from "next/image";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { getSingleGear } from "../../_actions/customerGearActions";
import RentalForm from "../../_components/RentalForm";

type GearDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const GearDetailsPage = async ({ params }: GearDetailsPageProps) => {
  await connection();

  const { id } = await params;
  const result = await getSingleGear(id);

  if (!result.success || !result.data) {
    notFound();
  }

  const gear = result.data;

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl bg-white">
        <div className="relative h-72 bg-gray-100 sm:h-96">
          {gear.image ? (
            <Image
              src={gear.image}
              alt={gear.name}
              fill
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              No image available
            </div>
          )}
        </div>

        <div className="space-y-4 p-5">
          <div>
            <p className="text-sm font-medium text-blue-600">
              {gear.category.name}
            </p>

            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              {gear.name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">Brand: {gear.brand}</p>
          </div>

          <p className="text-sm leading-6 text-gray-600">{gear.description}</p>

          <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
            <div>
              <p className="text-sm text-gray-500">Price per day</p>

              <p className="text-xl font-bold text-blue-600">
                ৳{gear.pricePerDay}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Available stock</p>

              <p className="text-xl font-bold text-gray-900">{gear.stock}</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-500">Provider</p>

            <p className="font-semibold text-gray-900">{gear.provider.name}</p>

            <p className="text-sm text-gray-500">{gear.provider.email}</p>
          </div>
        </div>
      </div>

      <RentalForm gearId={gear.id} stock={gear.stock} />
    </section>
  );
};

export default GearDetailsPage;
