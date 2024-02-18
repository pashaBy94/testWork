import { useEffect } from "react";

export default function Test() {
    useEffect(() => {
        const changeURL = () => {
            const newUrl = `/${222}`;
            window.history.replaceState({ detail: 'update' }, '', newUrl);
        };
        changeURL();
    });
    return(<div>
        Test jsx hello
    </div>)
}