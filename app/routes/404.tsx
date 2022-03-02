import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return { title: "Ain't nothing here" };
};

export default function FourOhFour() {
  return (
    <div>
      <h1 className="text-7xl font-semibold">404</h1>
    </div>
  );
}
