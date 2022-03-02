import { RouteComponent, MetaFunction, Link } from "remix";

const meta: MetaFunction = () => ({
  title: "Page 2",
});

const Page: RouteComponent = () => {
  return (
    <>
    <div className="font-sans max-w-5xl mx-auto border text-center p-10 font-bold text-4xl">
      <p>Welcome to Page 2👋</p>
      <Link to="/">Go back home.</Link>
    </div>
    </>
  );
};

export default Page;
export { meta };
