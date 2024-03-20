export default class ErrorRepository {
  constructor() {
    this.errorsMapArray = new Map([
      [400, 'Bad Request'],
      [404, 'Not Found'],
      [502, 'Bad Gateway'],
    ]);
  }

  translate(code) {
    return this.errorsMapArray.get(code) || 'Unknown error';
  }
}
