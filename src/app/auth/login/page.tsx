import { Login } from "../ui/Login";

type loginProps = {
  params: { locale: string };
};

export default async function AuthPage({ params: { locale } }: loginProps) {
  return (
    <section className="container py-20 mx-auto w-full flex justify-center items-center">
      <div className="h-full my-20 w-full sm:w-2/3 md:w-1/2">
        <Login />
      </div>
    </section>
  );
}
