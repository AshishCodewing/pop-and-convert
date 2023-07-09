import DashHeader from "./pages/header/DashHeader";
import PageComponent from "./pages";

function App() {
  console.log(window.location);

  return (
    <>
      <DashHeader />
      <PageComponent />
    </>
  )
}

export default App
