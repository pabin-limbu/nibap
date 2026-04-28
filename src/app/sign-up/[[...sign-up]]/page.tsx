import { SignUp } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp
        appearance={{ elements: { rootbox: "mx-auto", card: "shadow-lg" } }}
      ></SignUp>
    </div>
  );
}

export default SignInPage;
