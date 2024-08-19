import { useState, useEffect } from 'react';
function Message2() {
    const [message2, setMessage2] = useState(' ');
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage2('To entendendo é nada kkkkk');
        }, 10000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <h3>{message2}</h3>
        </div>
    );
}
export default Message2;