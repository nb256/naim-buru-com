import { mount } from "enzyme";

import Menu from "../components/Menu";

describe("Menu contains required links", function() {
  it("should render scroll navigation links", function() {
    expect(
      mount(<Menu />)
        .find('a[href="#home"]')
        .at(0)
        .text()
    ).toEqual("Home");

    expect(
      mount(<Menu />)
        .find('a[href="#projects"]')
        .at(0)
        .text()
    ).toEqual("Projects");

    expect(
      mount(<Menu />)
        .find('a[href="#work"]')
        .at(0)
        .text()
    ).toEqual("Work Experience");

    expect(
      mount(<Menu />)
        .find('a[href="#blogposts"]')
        .at(0)
        .text()
    ).toEqual("Blog");
  });

  it("should render my github link", function() {
    expect(
      mount(<Menu />)
        .find('a[href="https://github.com/nb256"]')
        .at(0)
        .text()
    ).toEqual("Github");
  });

  it("should render my linkedin link", function() {
    expect(
      mount(<Menu />)
        .find('a[href="https://www.linkedin.com/in/naimburu/"]')
        .at(0)
        .text()
    ).toEqual("Linkedin");
  });

  it("should render mail link", function() {
    expect(
      mount(<Menu />)
        .find('a[href="mailto:nbur4u@gmail.com"]')
        .at(0)
        .text()
    ).toEqual("Mail me");
  });

  it("should render my resume link", function() {
    expect(
      mount(<Menu />)
        .find(
          'a[href="https://naim-public.s3.amazonaws.com/CV-Europass-20190719-Buru-EN.pdf"]'
        )
        .at(0)
        .text()
    ).toEqual("Resume");
  });
});
