import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination.view";

describe("Pagination", () => {
  test("it should show the correct number of pages", () => {
    render(<Pagination onChange={jest.fn} page={1} total={10} perPage={5} />);

    const pages = screen.getByTestId("pages-list");

    expect(pages.children).toHaveLength(2);
  });

  test("it should fire the onChange function when a page is clicked", () => {
    const onChange = jest.fn();
    render(<Pagination onChange={onChange} page={1} total={10} perPage={5} />);

    const pageTwo = screen.getByText("2");

    pageTwo.click();

    expect(onChange).toHaveBeenCalledWith(2);
  });
});
