// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardFooter,
// } from "@/components/ui/card";
// import Link from "next/link";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// interface LoginForm {
//   usernameOrEmail: string;
//   password: string;
// }

// export default function Login() {
//   const [formData, setFormData] = useState<LoginForm>({
//     usernameOrEmail: "",
//     password: "",
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Login submitted", formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <MaxWidthWrapper>
//       <Card className="w-full max-w-md mx-auto mt-8 mb-8">
//         <CardHeader>
//           <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
//             <span className="text-2xl font-bold text-primary-foreground">
//               LOGO
//             </span>
//           </div>
//           <h2 className="text-2xl font-bold text-center mt-4">
//             721 Sportswear
//           </h2>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="usernameOrEmail">Username or Email</Label>
//               <Input
//                 id="usernameOrEmail"
//                 name="usernameOrEmail"
//                 type="text"
//                 value={formData.usernameOrEmail}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="flex flex-col items-center">
//           <p className="text-sm text-muted-foreground">No account?</p>
//           <Link href="/register" className="text-primary hover:underline">
//             Register
//           </Link>
//         </CardFooter>
//       </Card>
//     </MaxWidthWrapper>
//   );
// }
