import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar"; // change to "./index"

describe("Avatar", () => {
  it("should render element with role='img'", () => {
    render(<Avatar />);

    // expect(screen.queryAllByRole("img")).toBeDefined(); // จะ return HTMLElement || null อาจจะใช้ในกรณีที่กด cliCk แล้วหายไป
    expect(screen.getByRole("img")).toBeDefined(); // จะ return HTMLElement || throw error อาจจะใช้ในกรณ๊ที่ Component บึ้ม
  });

  it("should have src inside element", () => {
    render(<Avatar src='https://test.com' />);

    expect(screen.getByRole("img")).toHaveAttribute('src', 'https://test.com')
  });

  it("should render icon if no src provided", () => {
    render(<Avatar />);

    expect(screen.getByRole("img").firstChild.nodeName).toEqual('svg')
  })

  it("should be able to replace default icon with children", () => {
    render(<Avatar>L4zy-p</Avatar>)

    expect(screen.getByRole('img').textContent).toEqual('L4zy-p')
  })

  it("should spread aria-label to root element", () => {
    render(<Avatar aria-label="Jun" />);

    expect(screen.getByLabelText("Jun")).toBeDefined();
  });

  // test style props ข้างใน
  it("should receive style prop", () => {
    render(
      <Avatar aria-label="Jun" style={{ fontVariant: "no-contextual" }} />
    );

    expect(screen.getByLabelText("Jun")).toHaveStyle({
      "font-variant": "no-contextual",
    });
  });
});
