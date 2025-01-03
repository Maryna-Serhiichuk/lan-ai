import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type UseHashReturn = [string, (newHash: string) => void];

export const useHash = (): UseHashReturn => {
    const { hash } = useLocation(); 
    const navigate = useNavigate();
    const [currentHash, setCurrentHash] = useState(hash);

    useEffect(() => {
        if (hash !== currentHash) {
            setCurrentHash(hash);
        }
    }, [hash, currentHash]);

    const updateHash = (newHash) => {
        navigate({ hash: newHash });
        setCurrentHash(newHash);
    };

    return [currentHash, updateHash];
}