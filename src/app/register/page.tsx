import RegisterForm from "@/components/register-form/register-form";
import Image from "next/image";

const Register = () => {
  return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src={"/static/logo_small.png"}
              className="mr-2"
              alt="logo"
              width={85}
              height={34}
            />{" "}
            International
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Register;
