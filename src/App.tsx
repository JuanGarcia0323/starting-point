import { ComponentLayout } from "smart-layout";
function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-500 to-blue-950 p-4">
      <ComponentLayout id="test">
        <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl bg-teal-500/50 ">
          <p>window</p>
        </div>
        <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl bg-teal-500/50 ">
          <p>window</p>
        </div>
        <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl bg-teal-500/50 ">
          <p>window</p>
        </div>
      </ComponentLayout>
    </div>
  );
}

export default App;
