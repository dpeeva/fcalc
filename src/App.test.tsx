import React from "react"
import { render, screen } from "@testing-library/react"
import { App } from "./App"

test("renders FCalc", () => {
    render(<App />)
    const calc = screen.getByTestId("fcalc")
    expect(calc).toBeInTheDocument()
})
