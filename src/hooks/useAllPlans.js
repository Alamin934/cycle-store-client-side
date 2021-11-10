import { useEffect, useState } from "react";

const useAllPlans = () => {
    const [plans, setPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://limitless-beyond-03016.herokuapp.com/allPlans')
            .then(res => res.json())
            .then(data => {
                setPlans(data);
                setIsLoading(data);
            })
    }, []);

    return {
        plans,
        isLoading
    }

};

export default useAllPlans;