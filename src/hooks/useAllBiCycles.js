import { useEffect, useState } from "react";

const useAllBiCycles = () => {
    const [biCycles, setBiCycles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://rocky-badlands-58533.herokuapp.com/allBiCycles')
            .then(res => res.json())
            .then(data => {
                setBiCycles(data);
                setIsLoading(data);
            })
    }, []);

    return {
        biCycles,
        isLoading,
        setBiCycles
    }

};

export default useAllBiCycles;