import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import store from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        {routes.map((route, index) => {
                            switch (route.layout) {
                                case "main":
                                    return (
                                        <Route 
                                            key={index}
                                            path={route.path} 
                                            element={
                                                <Main>
                                                    <route.component />
                                                </Main>
                                            }
                                        />
                                    );
                                case "auth":
                                    return (
                                        <Route 
                                            key={index}
                                            path={route.path} 
                                            element={
                                                <Auth>
                                                    <route.component />
                                                </Auth>
                                            }
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
