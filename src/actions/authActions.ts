"use server";
export async function signUpAction(prevState: any, formData: FormData) {
  const rawFormData = {
    fullName: formData.get("fullName"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
  };
  console.log(rawFormData);

  return {
    message: "Fucked!",
  };
}
