import AcmeLogo from '@/app/ui/acme-logo';
import SignUpForm from '@/app/ui/signupform';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <SignUpForm />
        <div className="flex justify-center mt-4">
          <a href="/login" className="text-sm text-blue-500 underline hover:text-blue-700">
            Go to Login
          </a>
        </div>
      </div>
    </main>
  );
}
