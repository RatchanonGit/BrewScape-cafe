import products from "../../data/ProductData"
import { useState, useEffect } from "react"

export default function Desserts(props) {
    const { card } = props
    const [search, setSearch] = useState("");
    const [filterDesserts, setFilerDesserts] = useState([])

    useEffect(() => {
        const result = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        setFilerDesserts(result)
    }, [search])

    return (
        <div>
            <div className="search-container">
                <h2 className="title">Desserts</h2>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a product e.g. cheesecake"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ul className="row">
                {filterDesserts
                    .filter((item) => item.type === "desserts")
                    .map((item) => card(item))}
            </ul>
        </div>
    )
}

