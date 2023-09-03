import products from "../../data/ProductData"
import "./Drinks.css"
import { useState, useEffect } from "react"

export default function Drinks(props) {
    const { card } = props
    const [search, setSearch] = useState("");
    const [filterDrinks, setFilerDrinks] = useState([])

    useEffect(() => {
        const result = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        setFilerDrinks(result)
    }, [search])
    return (
        <div>
            <div className="search-container">
                <h2 className="title">Drinks</h2>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a product e.g. ice coffee"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ul className="row">
                {filterDrinks.map((item) => {
                    if (item.type === "drinks") {
                        return card(item);
                    }
                }
                )}
            </ul>
        </div>
    )
}