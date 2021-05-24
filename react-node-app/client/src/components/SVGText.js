import React, {useState, useEffect} from 'react';

function SVGText(props){
    const [data, setData] = useState(null);
    fetch("/api/textToSvg?name=".concat(props.name))
        .then((res) => setData(res.data));


    return (
        <div>
        {data}
        </div>
    );
}

export default SVGText;