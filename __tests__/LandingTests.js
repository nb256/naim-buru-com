import { shallow } from "enzyme";

import A from "../pages/index";

describe("A suite", function() {
  it("should render without throwing an error", function() {
    expect(shallow(<A />).contains("My page")).toBe(true);
  });
});
