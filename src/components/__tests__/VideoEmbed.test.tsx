import { render, screen } from "@testing-library/react";
import { VideoEmbed } from "@/components/VideoEmbed";
import "@testing-library/jest-dom";
import path from "path";
import fs from "fs";

describe("VideoEmbed", () => {

    it("video file exists in /public", () => {
        const absolutePath = path.join(process.cwd(), "public/videos/parkRide.mp4");
        expect(fs.existsSync(absolutePath)).toBe(true);
    });

    it("passes the correct src to the player", () => {
        render(<VideoEmbed src="/videos/parkRide.mp4" title="Test video" />);
        expect(document.querySelector("video")).toHaveAttribute("src", "/videos/parkRide.mp4");
    });

    it("renders with controls enabled", () => {
        render(<VideoEmbed src="/videos/parkRide.mp4" title="Test video" />);
        expect(document.querySelector("video")).toHaveAttribute("controls");
    });

    it("has an accessible label matching the title prop", () => {
        render(
            <VideoEmbed
                src="/videos/parkRide.mp4"
                title="Human Gyroscope in action"
            />
        );
        expect(
            screen.getByLabelText("Human Gyroscope in action")
        ).toBeInTheDocument();
    });

});