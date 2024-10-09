import {
  createUserWithAccount,
  getUserByEmail,
} from "../../../../lib/utils/user";
import bcrypt from "bcryptjs"; // Import bcryptjs instead of bcrypt
import { NextResponse } from "next/server";

import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already in use.",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Salt round of 10

    // Create the new user if the email doesn't exist
    const newUser = await createUserWithAccount({
      name,
      email,
      password: hashedPassword, // Use the hashed password
    });

    return NextResponse.json(
      {
        message: "User created",
        data: {
          ...newUser,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      { status: 500 }
    );
  }
};
