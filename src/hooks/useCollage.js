import { useEffect, useState } from "react"

const useCollege = () => {
    const [collages, setCollages] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('collage.json')
            .then(res => res.json())
            .then(data => {
                setCollages(data);
                setLoading(false);
            })
    }, [])
    return [collages, loading]
}

export default useCollege;