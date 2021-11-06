import React, { useState } from 'react';

export default function Contador() {
    const [num, setNum] = useState(0);
    return  (
        <div>
            <p> Contador { num } </p>
            <button onClick={ () => setNum(num + 5) }>Somar 5</button>
            <br /> <br />
            <button onClick={ () => setNum(num - 3) }>Subtrair 3</button>
        </div>
    );
};