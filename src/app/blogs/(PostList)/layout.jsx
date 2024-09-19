import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
};

async function Layout({ children }) {
 
  return (
    <div>
      <h1 className="text-lg font-bold mb-12 text-secondary-700">
        لیست بلاگ ها
      </h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}
export default Layout;
