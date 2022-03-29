import React from 'react';
import { useCookies } from 'react-cookie';

const CookiesExm = () => {
    const [cookies, setCookies] = useCookies(['member']);

    const createCookie = () => {
        setCookies('member', 'Hello Members', {
            path: "/"
        });
    }
    return (
        <div>
            <button clas="btn btn-primary" onClick={createCookie}>Create Cookie</button>
            <p>Show cookie : </p>{cookies.member && <p>{cookies.member}</p>}
        </div>
    )
}

export default CookiesExm