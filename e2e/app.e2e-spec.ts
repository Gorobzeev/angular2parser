import { Angular2parserPage } from './app.po';

describe('angular2parser App', () => {
  let page: Angular2parserPage;

  beforeEach(() => {
    page = new Angular2parserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
