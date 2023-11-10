import { getValueDescList } from "../getValueDescList";
+describe("getValueDescList", () => {
  test("getValueDescList", () => {
    const enumTest = {
      YES: {
        value: 1,
        desc: "是",
      },
      NO: {
        value: 2,
        desc: "否",
      },
    };
    const valueDescList = [
      {
        value: 1,
        desc: "是",
      },
      {
        value: 2,
        desc: "否",
      },
    ];
    expect(getValueDescList(enumTest)).toEqual(valueDescList);
  });

  test("入参是个number", () => {
    function getTransformObjectToArrayErrorWrapFn() {
      getValueDescList(123356 as Object);
    }
    expect(getTransformObjectToArrayErrorWrapFn).toThrow("传入的不是对象");
  });
});
