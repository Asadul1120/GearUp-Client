# GearUp Client

GearUp is a full-stack sports and outdoor equipment rental platform. It connects customers who need equipment with providers who offer gear for rent.

The platform includes separate role-based dashboards for Customers, Providers, and Admins.

## Live Links

- Frontend: Add deployed frontend URL
- Backend API: https://gearup-server.onrender.com
- Frontend Repository: https://github.com/Asadul1120/GearUp-Client
- Backend Repository: https://github.com/Asadul1120/gearup-server

## Project Overview

GearUp allows users to:

- Browse available sports and outdoor equipment
- Search gear by name, brand, category, description, or provider
- View prices, stock, availability, provider details, and customer reviews
- Rent equipment for selected dates
- Complete rental payments
- Manage rental activities
- Add reviews after completed rentals
- Manage gear and rental orders as a provider
- Manage users, categories, and platform information as an admin

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js Server Actions
- Next.js Image
- Lucide React
- Sonner
- Cookie-based authentication

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT authentication
- Payment gateway integration

## User Roles

### Customer

Customers can:

- Browse available gear
- View individual gear information
- Search and filter equipment
- Create rental orders
- View rental history
- Make payments
- View payment history
- Submit gear reviews
- Update profile information

### Provider

Providers can:

- View provider dashboard statistics
- Add new gear
- Update existing gear
- Delete owned gear
- Manage stock and availability
- View customer rental orders
- Update rental order status
- Update profile information

### Admin

Admins can:

- View admin dashboard statistics
- View all users
- Suspend or activate users
- Delete users
- Monitor listed gear
- Create categories
- Update categories
- Delete categories
- Update profile information

## Main Features

### Public Website

The public website includes:

- Responsive navigation bar
- Modern homepage hero section
- Gear search from the homepage
- Public gear listing
- Customer ratings and review comments
- About page
- Contact page
- Responsive footer
- Mobile menu
- Global loading, error, and not-found pages

### Authentication and Authorization

- Cookie-based authentication
- Protected dashboard routes
- Role-based dashboard access
- Guest users are redirected to the login page
- Authenticated users cannot access login and registration pages
- Suspended users are restricted according to backend authorization rules

### Responsive Design

The interface follows a mobile-first approach and supports:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

## Public Routes

| Route | Description |
|---|---|
| `/` | Public homepage |
| `/gears` | Public gear listing and search |
| `/about` | Platform information |
| `/contact` | Support and contact information |
| `/login` | User login |
| `/register` | User registration |
| `/profile` | Protected user profile |

The homepage search redirects users to:

```text
/gears?search=searchText
```

## Customer Routes

| Route | Description |
|---|---|
| `/customer` | Customer dashboard |
| `/customer/gears` | Browse available gear |
| `/customer/gears/[id]` | Gear details and rental form |
| `/customer/rentals` | Customer rental history |
| `/customer/payments` | Payment history |
| `/customer/reviews` | Submitted reviews |

## Provider Routes

| Route | Description |
|---|---|
| `/provider` | Provider dashboard |
| `/provider/gears` | Provider gear list |
| `/provider/gears/new` | Add new gear |
| `/provider/gears/[id]/edit` | Edit gear |
| `/provider/orders` | Rental order management |

## Admin Routes

| Route | Description |
|---|---|
| `/admin` | Admin dashboard |
| `/admin/users` | User management |
| `/admin/gears` | Gear monitoring |
| `/admin/categories` | Category management |

## API Integration

The frontend communicates with the backend through Next.js Server Actions.

Backend base URL:

```text
https://gearup-server.onrender.com
```

The URL is stored in an environment variable:

```env
BACKEND_API_URL=https://gearup-server.onrender.com
```

Protected requests forward the authentication cookie to the backend.

Example:

```ts
const cookieStore = await cookies();

const response = await fetch(
  `${process.env.BACKEND_API_URL}/api/auth/me`,
  {
    headers: {
      Cookie: cookieStore.toString(),
    },
  },
);
```

## API Endpoints

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/auth/me` | Get logged-in user |
| `POST` | `/api/auth/login` | Log in a user |
| `POST` | `/api/auth/register` | Register a user |
| `POST` | `/api/auth/logout` | Log out a user |

### Users

| Method | Endpoint | Purpose |
|---|---|---|
| `PATCH` | `/api/users` | Update logged-in user profile |
| `GET` | `/api/users` | Get all users for Admin |
| `PUT` | `/api/users/status/:userId` | Update user status |
| `DELETE` | `/api/users/:userId` | Delete a user |

### Gear

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/gear` | Get gear list |
| `GET` | `/api/gear/:gearId` | Get single gear |
| `POST` | `/api/gear` | Create gear |
| `PUT` | `/api/gear/:gearId` | Update gear |
| `DELETE` | `/api/gear/:gearId` | Delete gear |

The public gear API response includes:

- Gear information
- Category information
- Provider information
- Customer reviews
- Rating
- Review comment
- Customer name
- Customer profile image

### Categories

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/categories` | Get categories |
| `POST` | `/api/categories` | Create category |
| `PATCH` | `/api/categories/:categoryId` | Update category |
| `DELETE` | `/api/categories/:categoryId` | Delete category |

### Rentals

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/rentals` | Create rental |
| `GET` | `/api/rentals` | Get customer rentals |
| `GET` | `/api/rentals/provider/orders` | Get provider rental orders |
| `PATCH` | `/api/rentals/provider/orders/:rentalId` | Update rental status |

### Payments

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/payments/create` | Create payment session |
| `GET` | `/api/payments` | Get customer payment history |

### Reviews

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/reviews` | Submit a gear review |

Reviews are also returned with the public gear API response.

## Project Structure

```text
app/
├── (admin-dashboard)/
│   └── admin/
├── (auth)/
├── (customer-dashboard)/
│   └── customer/
├── (provider-dashboard)/
│   └── provider/
├── _components/
│   ├── footer/
│   ├── hero/   
│   └── navbar/
├── about/
├── contact/
├── gears/
├── profile/
├── global-error.tsx
├── layout.tsx
├── not-found.tsx
└── page.tsx

types/
proxy.ts
next.config.ts
```

## Environment Variables

Create a `.env` file in the project root:

```env
BACKEND_API_URL=https://gearup-server.onrender.com

NEXT_PUBLIC_SUPPORT_EMAIL=support@gearup.com
NEXT_PUBLIC_SUPPORT_PHONE=01812345678
```

Do not commit real credentials or secret environment variables to GitHub.

## Installation

Clone the repository:

```bash
git clone https://github.com/Asadul1120/GearUp-Client.git
```

Enter the project directory:

```bash
cd GearUp-Client
```

Install dependencies:

```bash
npm install
```

Create the `.env` file and add the required environment variables.

Start the development server:

```bash
npm run dev
```

Open the application:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Route Protection

Protected routes are configured through:

```text
proxy.ts
```

Protected route groups include:

```text
/customer
/provider
/admin
/profile
```

Dashboard layouts and server-side authentication checks also verify the authenticated user's role.

## Search Functionality

The homepage includes a gear search form.

When submitted, it redirects to:

```text
/gears?search=football
```

The public gear page reads the search query and filters gear by:

- Gear name
- Brand
- Category
- Provider
- Description

## Error Handling

The application includes:

- Loading states
- Empty states
- Form error messages
- Server action error responses
- Route-level error pages
- Global error page
- Global not-found page
- Dashboard-specific not-found pages

Server actions generally return:

```ts
{
  success: boolean;
  message: string;
  data?: unknown;
}
```

## Image Configuration

Remote images are configured in `next.config.ts`.

Example:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "i.ibb.co",
    },
  ],
},
```

## Deployment

The frontend can be deployed to Vercel.

Required Vercel environment variables:

```env
BACKEND_API_URL=https://gearup-server.onrender.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@gearup.com
NEXT_PUBLIC_SUPPORT_PHONE=01812345678
```

After adding the variables, redeploy the project.

## Final Testing Checklist

Before deployment, verify:

- Homepage loads correctly
- Homepage search redirects to `/gears`
- Public gear search works
- Gear reviews are displayed
- Login and registration work
- Profile update works
- Customer dashboard is protected
- Provider dashboard is protected
- Admin dashboard is protected
- Rental creation works
- Payment redirection works
- Review submission works
- Mobile menu works
- All public pages are responsive
- Production build completes successfully

## Author

Developed as a full-stack sports gear rental platform project.