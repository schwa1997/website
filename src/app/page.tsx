import { Girl } from "./components/Girl";
import { Who } from "./components/Who";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Girl />
      <Who />
      <Works/>
    </div>
  );
}
