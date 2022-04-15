import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("test the homepage", () => {
  it("tests", () => {
    const router = {
      push: jest.fn(),
    };
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );

    const input = screen.getByTestId("test-homepage-input");

    fireEvent.change(input, { target: { value: "pufto" } });

    const button = screen.getByTestId("test-homepage-button");

    fireEvent.click(button);

    // expect(input.value).toBe("pufto");
    expect(router.push).toHaveBeenCalledWith("/pufto");
  });
});
