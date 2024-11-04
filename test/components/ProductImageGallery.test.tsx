import { it, expect, describe } from "vitest";
import { ImageUrl } from "../../src/lib/types";
import ProductImageGallery from "../../src/components/ProductIMageGallery";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";

describe("Product Image Gallery", () => {
  it("should dom be null when no image available", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("should render array of images", () => {
    const imageUrls: ImageUrl[] = [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images=screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);
    imageUrls.forEach((url,index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
