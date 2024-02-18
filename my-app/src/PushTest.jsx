import { useEffect } from "react";

export default function PushTest() {
    useEffect(() => {
        const changeURL = () => {
            const newUrl = `/${222}`;
            window.history.replaceState({ detail: 'update' }, '', newUrl);
        };
        changeURL();
    });
    return(<div>
        PushTest hello
    </div>)
}