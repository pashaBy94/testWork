import { useEffect } from "react";

export default function PushTest() {
    useEffect(() => {
        const changeURL = () => {
            const newUrl = `/${555}`;
            window.history.replaceState({ detail: 'update' }, '', newUrl);
        };
        changeURL();
    },[]);
    return(<div>
        PushTest hello
    </div>)
}