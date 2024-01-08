import { useContext, useState } from "react";

const CounterContext = createContext(null);
export default function CounterProvider(props) {
    const [count, setCount] = useState(0);
    const values = { count, setCount };
    return <CounterContext.Provider value={values} {...props}></CounterContext.Provider>
}
export function UseCount() {
    const context = useContext(CounterContext);
    if (typeof context === "undefined") throw new Error("This CounterProvider should wrap App");
    return context;
} 