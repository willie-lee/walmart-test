import React from "react"
import { Link } from "react-router-dom"
import DessertList from "../components/List"

const Home = () => {
    return (
        <>
            <div className="tr mw-100 bg-light-red pa2 v-btm">
                <Link className="b link dim bw2 ph3 pv2 mb2 dib bg-white dark-green" to="/add">+ Add Dessert</Link>
            </div>
            <DessertList />
        </>
    )
}

export default Home