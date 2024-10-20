export type fieldType = {
  label: string;
  type: string;
  placeholder: string;
}[];

export interface UserSessionComposable {
  loggedIn: ComputedRef<boolean>;
  user: ComputedRef<User | null>;
  session: Ref<UserSession>;
  fetch: () => Promise<void>;
  clear: () => Promise<void>;
}
declare module "#auth-utils" {
  interface User {
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }

  interface UserSession {
    user: {
      username: string;
    };
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {};
