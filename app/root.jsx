import {
  Links,
  LiveReload,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import Navigation from './components/Navigation.jsx';
import stylesUrl from "./styles/app.css";
import { authenticator } from "./utils/auth.server.js";

export let links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader = async ({request}) => {

  let user = await authenticator.isAuthenticated(request)

  return { date: new Date(), user: user };
};

function Document({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  let data = useLoaderData();
  return (
    <Document>
      <Navigation user={data?.user} />
      <Outlet />
      <footer className="text-center border-t max-w-5xl mx-auto">
        <p className="text-gray-500 p-1">This page was rendered at {data.date.toLocaleString()}</p>
        <Link to="/">Go to Home</Link>
      </footer>
    </Document>
  );
}

export function CatchBoundary({ error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>Replace this UI with what you want users to see when your app throws uncaught errors.</p>
    </Document>
  )
}
