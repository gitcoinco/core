import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Primitives/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const gitcoinProfileCID = "QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr";
const gitcoinProfileURL = "https://ipfs.io/ipfs/QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr";

export const sourceFromIPFS: Story = {
  args: {
    ipfsCID: gitcoinProfileCID,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByAltText("avatar");
    const src = image.getAttribute("src");
    expect(src).toContain(gitcoinProfileCID);
  },
};

export const sourceFromURL: Story = {
  args: {
    url: gitcoinProfileURL,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByAltText("avatar");
    expect(image).toHaveAttribute("src", gitcoinProfileURL);
  },
};

export const FallbackName: Story = {
  args: {
    fallbackName: "Gitcoin Labs",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole("presentation");
    expect(avatar).toHaveTextContent("GL");
  },
};

export const MissingEverything: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByAltText("avatar");
    const src = image.getAttribute("src");
    expect(src).toContain("default");
  },
};

export const AllProvided: Story = {
  args: {
    url: gitcoinProfileURL,
    ipfsCID: gitcoinProfileCID,
    fallbackName: "Gitcoin Labs",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByAltText("avatar");
    const src = image.getAttribute("src");
    expect(src).toContain(gitcoinProfileCID);
  },
};

export const Big: Story = {
  args: {
    ipfsCID: gitcoinProfileCID,
    size: 200,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole("presentation");
    expect(avatar).toHaveStyle("width: 200px");
    expect(avatar).toHaveStyle("height: 200px");
  },
};

export const DefaultVariant: Story = {
  args: {
    ipfsCID: gitcoinProfileCID,
    variant: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole("presentation");
    expect(avatar).toHaveClass("shadow-md");
  },
};

export const BorderedVariant: Story = {
  args: {
    ipfsCID: gitcoinProfileCID,
    variant: "bordered",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole("presentation");
    expect(avatar).toHaveClass("border-4");
  },
};
