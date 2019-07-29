import { mount } from "enzyme";
import Project from "../components/Project";

describe("Project", () => {
  const exampleProject = {
    name: "This site",
    image: "https://naim-public.s3.amazonaws.com/naimburu.png",
    description: "My server-side rendered personal portfolio. ",
    codelink: "https://github.com/nb256/naim-buru-com",
    date: new Date(2019, 6, 19).toISOString(),
    technologies: [
      "next.js",
      "react",
      "express",
      "styled-components",
      "material-ui",
      "jest",
      "enzyme",
      "aws ec2"
    ]
  };

  const wrapper = mount(<Project project={exampleProject} />);

  it("displays project name", () => {
    // .hostNodes() to eliminate coupling react and dom nodes
    expect(
      wrapper
        .find('[data-test="project-name"]')
        .hostNodes()
        .text()
    ).toEqual(exampleProject.name);
  });

  it("displays project description", () => {
    expect(
      wrapper
        .find('[data-test="project-description"]')
        .hostNodes()
        .text()
    ).toEqual(exampleProject.description);
  });

  it("displays project image", () => {
    expect(
      wrapper.containsMatchingElement(
        <img src="https://naim-public.s3.amazonaws.com/naimburu.png" />
      )
    ).toBe(true);
  });

  it("displays code link", () => {
    expect(
      wrapper
        .find('[data-test="project-code-link"]')
        .hostNodes()
        .prop("href")
    ).toEqual(exampleProject.codelink);
  });

  it("does not display demo link when it is unavailable", () => {
    expect(wrapper.exists('[data-test="project-demo-link"]')).toBe(false);
  });

  it("displays right amount of technologies", () => {
    expect(
      wrapper.find('[data-test="project-technology"]').hostNodes()
    ).toHaveLength(exampleProject.technologies.length);
  });
});
