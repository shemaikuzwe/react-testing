import { it, expect, describe } from "vitest";
import ExpandableText from "../../src/components/ExapandbleText";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";

import ExapandableText from "../../src/components/ExapandbleText";
import UserEvent from "@testing-library/user-event";

describe("Expandable Text",()=>{
    const text="a"
    const limit=255;
    const longText="a".repeat(limit +1);
    const truncatedText=longText.substring(0,255)+"..."
    it("should render text ",()=>{
        
        render(<ExapandableText text={text}/>)
       
        expect(screen.getByText(text)).toBeInTheDocument();
        const button=screen.queryByRole("button");
        expect(button).not.toBeInTheDocument();
    });
    it("should render show more button",async()=>{
        
        render(<ExpandableText text={longText}/>)
        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button=screen.getByRole("button");
        expect(button).toHaveTextContent(/more/i)
     
    });

    it("should render a show less button when clikced",async()=>{
        
        render(<ExpandableText text={longText}/>)
        const button=screen.getByRole("button");
        const user=UserEvent.setup();
        await user.click(button)
        expect(screen.getByText(longText)).toBeInTheDocument()
        expect(button).toHaveTextContent(/less/i);
    });

    it("should collapse text when show less clicked",async()=>{
        
        render(<ExpandableText text={longText}/>)
        const showMoreButton=screen.getByRole("button",{name:/more/i});
        const user=UserEvent.setup();
        await user.click(showMoreButton)
      
        const showMoreLess=screen.getByRole("button",{name:/less/i});
        await user.click(showMoreLess)
        expect(screen.getByText(truncatedText)).toBeInTheDocument()
        expect(showMoreButton).toHaveTextContent(/more/i);
    })
})