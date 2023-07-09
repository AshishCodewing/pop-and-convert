import DashHeader from "./pages/header/DashHeader";
import PageComponent from "./pages";

function App() {
  console.log(window.location);

  return (
    <>
      <DashHeader />
      <div className="mx-auto w-full bg-background h-full">
        <PageComponent />
      </div>
    </>
  )
}

export default App
