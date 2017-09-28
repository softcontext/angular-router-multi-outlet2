import { AngularRouterMultiOutlet2Page } from './app.po';

describe('angular-router-multi-outlet2 App', () => {
  let page: AngularRouterMultiOutlet2Page;

  beforeEach(() => {
    page = new AngularRouterMultiOutlet2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
