import { useEffect, useState } from "react"

const useTshirts = () => {
    const [tShirts, setTShits] = useState([]);
    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => setTShits(data));
    }, []);
    return [tShirts, setTShits];
}

export default useTshirts;