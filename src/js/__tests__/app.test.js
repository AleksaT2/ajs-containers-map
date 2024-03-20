import ErrorRepository from "../app"; 

const errorsArray = new ErrorRepository();

test("Ошибка 400 - success", () => {
  expect(errorsArray.translate(400)).toBe("Bad Request");
});

test("Ошибка 404 - success", () => {
  expect(errorsArray.translate(404)).toBe("Not Found");
});

test("Ошибка 502", () => {
  expect(errorsArray.translate(502)).toBe("Bad Gateway");
});

test("Неизвестная ошибка", () => {
  expect(errorsArray.translate(700)).toBe("Unknown error");
});
