import Link from "next/link";

export default function Empty() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-7xl font-bold mb-8">Page not found</p>
      <Link href="/" className="block bg-black text-xs text-white rounded-2xl px-4 py-1.5">Back to home</Link>
    </main>
  );
}
