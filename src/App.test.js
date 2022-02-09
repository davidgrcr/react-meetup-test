/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import App from "./App";

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  //  console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});
