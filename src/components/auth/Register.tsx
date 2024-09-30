"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

interface RegisterForm {
  firstName: string;
  lastName: string;
  middleInitial: string;
  address: string;
  contactNo: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    middleInitial: "",
    address: "",
    contactNo: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("/api/register", {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Indicate that the request body is JSON
        },
        body: JSON.stringify(formData), // Convert the form data to JSON
      });

      if (response.ok) {
        console.log("Registration successful");
        // You can redirect the user to a different page or show a success message here
      } else {
        console.error("Registration failed", await response.json());
        // You can show an error message to the user here
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle any errors that occur during the fetch request
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">
            LOGO
          </span>
        </div>
        <h2 className="text-2xl font-bold text-center">Register</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="space-y-2 flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 flex-initial w-20">
              <Label htmlFor="middleInitial">M.I.</Label>
              <Input
                id="middleInitial"
                name="middleInitial"
                type="text"
                value={formData.middleInitial}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="space-y-2 flex-1">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 flex-initial w-40">
              <Label htmlFor="contactNo">Contact No.</Label>
              <Input
                id="contactNo"
                name="contactNo"
                type="text"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?
        </p>
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </CardFooter>
    </Card>
  );
}
