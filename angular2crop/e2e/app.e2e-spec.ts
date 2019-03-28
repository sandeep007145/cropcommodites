import { Angular2cropPage } from './app.po';

describe('angular2crop App', () => {
  let page: Angular2cropPage;

  beforeEach(() => {
    page = new Angular2cropPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
