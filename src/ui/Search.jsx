"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams()
  const router = useRouter();
  const pathname = usePathname();

  const onSubmit = (e) => {
    e.preventDefault()
    const search = e.target.search;
    const searchValue = search.value;
    const newParams = new URLSearchParams(searchParams.toString())

    if (searchValue) {
      newParams.set('q', searchValue)
    } else {
      newParams.delete('q')
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
  }
  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}