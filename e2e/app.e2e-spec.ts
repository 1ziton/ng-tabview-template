import { NgStarterPage } from './app.po';

describe('ng-starter App', () => {
  let page: NgStarterPage;

  beforeEach(() => {
    page = new NgStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
