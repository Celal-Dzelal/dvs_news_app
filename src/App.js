import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import { store } from "./app/store";

function App() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
