import React from "react"

const Add = () => {
    return (
        <div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Dessert Name*</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="name"  id="name" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Calories*</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="calories"  id="calories" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Fat*</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="fat"  id="fat" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Carbs*</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="carbs"  id="carbs" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Protein*</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="protein"  id="protein" />
            </div>
            <div>
                <input type="button" name="submit" value="submit" />
            </div>
        </div>
    )
}

export default Add