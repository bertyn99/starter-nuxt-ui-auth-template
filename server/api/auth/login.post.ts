import * as argon2 from "@node-rs/argon2";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event); // Retrieve request body
    if (!body) {
      console.error("Request body is empty or undefined");
      return createError({
        statusCode: 400,
        statusMessage: "Request body is empty or undefined",
      });
    }

    const { email, password } = body;

    if (!email || !password) {
      console.error("Username or password missing");
      return createError({
        statusCode: 400,
        statusMessage: "Username and password are required",
      });
    }

    const db = useDB(); // Initialize database connection
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    // For security reasons, do not specify if username or password is incorrect
    if (!user || !(await argon2.verify(user.password, password))) {
      console.error(`Invalid username or password for user: ${email}`);
      return createError({
        statusCode: 401,
        statusMessage: "Invalid username or password",
      });
    } else {
      const userData = { username: user.name };
      await setUserSession(event, {
        user: userData,
        loggedInAt: new Date(),
      });
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error handling login request:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Failed to process request",
    });
  }
});
