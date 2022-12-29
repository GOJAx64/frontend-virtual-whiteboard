import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <> 
     {/* Styles does not work :( */}
      <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:1/2 bg-red-700">
          <Outlet />
        </div>
      </main>
    </>
  )
}
