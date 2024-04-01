import { useEffect, useState } from "react";

export const useLocalStorageData = (key: string, initialValue: any) => {
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        const handleStorageChange = () => {
            const value = localStorage.getItem(key);
            if (value) {
                setData(JSON.parse(value));
            }
        };

        const fetchData = () => {
            const value = localStorage.getItem(key);
            if (value) {
                setData(JSON.parse(value));
            }
        };

        fetchData();

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    })
}