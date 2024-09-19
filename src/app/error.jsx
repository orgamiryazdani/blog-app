"use client";

function Error({ error, reset }) {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-xl font-bold text-red-500 mb-8">{error.message}</p>
          <button
            onClick={reset}
            className="flex items-center gap-x-2 text-secondary-500"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    </div>
  );
}
export default Error;
