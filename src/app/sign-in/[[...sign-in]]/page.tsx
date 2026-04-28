import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignIn
        appearance={{ elements: { rootbox: "mx-auto", card: "shadow-lg" } }}
      ></SignIn>
    </div>
  );
}

export default SignInPage;
