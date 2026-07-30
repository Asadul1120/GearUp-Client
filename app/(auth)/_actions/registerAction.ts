"use server";



interface RegisterState {
  success: boolean;
  statusCode: number;
  message: string;
}

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    };

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        statusCode: result.statusCode || res.status,
        message: result.message || "Registration failed",
      };
    }

    return {
      success: true,
      statusCode: result.statusCode || res.status,
      message: result.message || "Registration successful",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      statusCode: 500,
      message: "Something went wrong. Please try again.",
    };
  }
};
