import { DashboardUiPage } from './app.po';

describe('dashboard-ui App', () => {
  let page: DashboardUiPage;

  beforeEach(() => {
    page = new DashboardUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
