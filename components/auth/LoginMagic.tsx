import { signIn } from "@/auth";

export function LoginMagic() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input placeholder="Email" name="email" type="text" />
      <button type="submit">Signin with Resend</button>
    </form>
  );
}
// import { TMagicSchema, magicSchema } from "@/lib/schema/magic";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
//
// export default function MagicLinkForm() {
//   const {
//     formState: { isSubmitting, errors },
//     handleSubmit,
//     register,
//     setError,
//     reset,
//   } = useForm<TMagicSchema>({
//     resolver: zodResolver(magicSchema),
//   });
//
//   const onSubmit = async (data: TMagicSchema) => {
//     const response = await fetch("/api/magic", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       method: "POST",
//     });
//     const responseData = await response.json();
//
//     if (!response.ok) {
//       alert("Submitting magic link failed");
//       return;
//     }
//
//     const error = responseData.errors?.email;
//     if (error) {
//       setError("email", {
//         message: error,
//         type: "server",
//       });
//     }
//
//     reset();
//   };
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="email">Email</label>
//       <input
//         {...register("email", { required: true })}
//         aria-invalid={errors.email ? "true" : "false"}
//         placeholder="Email"
//         type="email"
//         id="email"
//       />
//       {errors.email && <p role="alert">{errors.email.message}</p>}
//     </form>
//   );
// }
