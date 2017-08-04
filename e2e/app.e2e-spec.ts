import { CareplanClientPage } from './app.po';

describe('careplan-client App', () => {
  let page: CareplanClientPage;

  beforeEach(() => {
    page = new CareplanClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
